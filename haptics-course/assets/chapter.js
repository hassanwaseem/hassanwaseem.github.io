function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      row.push(cell);
      cell = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(cell);
      cell = '';
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
    } else {
      cell += char;
    }
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift().map((value) => value.trim());
  return rows.map((values) => Object.fromEntries(
    headers.map((header, index) => [header, (values[index] || '').trim()]),
  ));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[char]));
}

function inline(text) {
  return escapeHTML(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\[(R\d+)\]/g, '<span class="citation">[$1]</span>');
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseFigure(line) {
  const payload = line.slice('FIGURE:'.length).trim();
  const [src = '', alt = '', caption = ''] = payload.split('|').map((part) => part.trim());
  if (!src) return '';
  return `<figure class="chapter-figure">
    <a class="figure-image-link" href="${escapeHTML(src)}" target="_blank" rel="noreferrer" aria-label="Open figure at full size">
      <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy">
    </a>
    ${caption ? `<figcaption>${inline(caption)}</figcaption>` : ''}
  </figure>`;
}

function parseCallout(line) {
  const payload = line.slice('CALLOUT:'.length).trim();
  const divider = payload.indexOf('|');
  const label = divider >= 0 ? payload.slice(0, divider).trim() : 'Research note';
  const body = divider >= 0 ? payload.slice(divider + 1).trim() : payload;
  return `<aside class="chapter-callout"><strong>${inline(label)}</strong><p>${inline(body)}</p></aside>`;
}

function markdownToHTML(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  let html = '';
  let paragraph = [];
  let listType = null;
  let tableRows = [];
  let inCode = false;
  let code = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(' ').trim();
    html += text.startsWith('LEAD:')
      ? `<p class="lead">${inline(text.slice(5).trim())}</p>`
      : `<p>${inline(text)}</p>`;
    paragraph = [];
  };

  const flushList = () => {
    if (!listType) return;
    html += `</${listType}>`;
    listType = null;
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.filter((row) => !/^\s*\|?\s*:?-+/.test(row));
    if (rows.length) {
      const cells = rows.map((row) => row.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim()));
      html += '<div class="chapter-table-wrap"><table><thead><tr>'
        + cells[0].map((cell) => `<th>${inline(cell)}</th>`).join('')
        + '</tr></thead><tbody>'
        + cells.slice(1).map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')
        + '</tbody></table></div>';
    }
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushParagraph();
      flushList();
      flushTable();
      if (inCode) {
        html += `<pre><code>${escapeHTML(code.join('\n'))}</code></pre>`;
        code = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (/^\|.*\|\s*$/.test(trimmed)) {
      flushParagraph();
      flushList();
      tableRows.push(trimmed);
      continue;
    }
    if (tableRows.length) flushTable();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith('FIGURE:')) {
      flushParagraph();
      flushList();
      html += parseFigure(trimmed);
      continue;
    }

    if (trimmed.startsWith('CALLOUT:')) {
      flushParagraph();
      flushList();
      html += parseCallout(trimmed);
      continue;
    }

    if (/^\$\$/.test(trimmed)) {
      flushParagraph();
      flushList();
      const equation = trimmed.replace(/^\$\$|\$\$$/g, '');
      html += `<div class="equation" role="math">${inline(equation)}</div>`;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const title = heading[2].trim();
      const id = slug(title);
      html += `<h${level} id="${id}">${inline(title)}</h${level}>`;
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      html += `<blockquote><p>${inline(quote[1])}</p></blockquote>`;
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const needed = unordered ? 'ul' : 'ol';
      if (listType !== needed) {
        flushList();
        html += `<${needed}>`;
        listType = needed;
      }
      html += `<li>${inline((unordered || ordered)[1])}</li>`;
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushTable();
  return html;
}

function extractChapter(text, id) {
  const start = `<!-- CHAPTER:${id} -->`;
  const startIndex = text.indexOf(start);
  if (startIndex < 0) throw new Error(`Chapter ${id} was not found in its content file.`);
  const contentStart = startIndex + start.length;
  const nextIndex = text.indexOf('<!-- CHAPTER:', contentStart);
  return text.slice(contentStart, nextIndex < 0 ? text.length : nextIndex).trim();
}

async function fetchText(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}.`);
  return response.text();
}

function metaHTML(chapter) {
  return `<div class="chapter-meta-card">
    <span class="chapter-number">${escapeHTML(chapter.id)}</span>
    <h1>${escapeHTML(chapter.title)}</h1>
    <p>${escapeHTML(chapter.subtitle)}</p>
    <dl>
      <div><dt>Part</dt><dd>${escapeHTML(chapter.part.replace(/^Part [IVX]+ — /, ''))}</dd></div>
      <div><dt>Level</dt><dd>${escapeHTML(chapter.level)}</dd></div>
      <div><dt>Reading</dt><dd>${escapeHTML(chapter.reading_time)}</dd></div>
      <div><dt>Status</dt><dd>${escapeHTML(chapter.status)}</dd></div>
      <div><dt>Version</dt><dd>${escapeHTML(chapter.version)}</dd></div>
      <div><dt>Updated</dt><dd>${escapeHTML(chapter.updated)}</dd></div>
    </dl>
  </div>`;
}

function buildTOC(container) {
  const headings = [...container.querySelectorAll('h2,h3')];
  document.querySelector('#chapter-toc').innerHTML = headings.map((heading) => (
    `<li${heading.tagName === 'H3' ? ' class="toc-sub"' : ''}><a href="#${heading.id}">${escapeHTML(heading.textContent)}</a></li>`
  )).join('');
}

async function init() {
  const id = new URLSearchParams(location.search).get('id') || '01';
  const chapters = parseCSV(await fetchText('data/chapters.csv'));
  const index = chapters.findIndex((chapter) => chapter.id === id);
  if (index < 0) throw new Error(`Unknown chapter ID: ${id}.`);

  const chapter = chapters[index];
  const raw = await fetchText(chapter.content_file);
  const markdown = extractChapter(raw, id);
  const container = document.querySelector('#chapter-content');
  container.innerHTML = markdownToHTML(markdown);
  document.querySelector('#chapter-meta').innerHTML = metaHTML(chapter);
  document.title = `${chapter.title} — Haptics course`;
  buildTOC(container);

  const previous = document.querySelector('#previous-chapter');
  const next = document.querySelector('#next-chapter');
  if (index > 0) {
    const item = chapters[index - 1];
    previous.href = `chapter.html?id=${item.id}`;
    previous.innerHTML = `← Previous<br><strong>${escapeHTML(item.short_title)}</strong>`;
  } else {
    previous.hidden = true;
  }

  if (index < chapters.length - 1) {
    const item = chapters[index + 1];
    next.href = `chapter.html?id=${item.id}`;
    next.innerHTML = `Next →<br><strong>${escapeHTML(item.short_title)}</strong>`;
  } else {
    next.hidden = true;
  }
}

init().catch((error) => {
  document.querySelector('#chapter-content').innerHTML = `<div class="error-panel"><strong>Chapter could not be loaded.</strong><p>${escapeHTML(error.message)}</p><p>Preview through a local web server rather than opening this file directly.</p></div>`;
});
