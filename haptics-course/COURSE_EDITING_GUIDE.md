# Course editing guide

This guide explains how to maintain the haptics course without changing page layouts.

## Safety rule

Work only on the `haptics-course` branch until publication is explicitly approved. Do not merge into `main`, change the Pages workflow, or add a link from the live portfolio.

## Preview before editing

Run a local server from the repository root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/haptics-course/`.

## Edit chapter text

Chapter text is stored in five Markdown files under `content/`. Each chapter begins with a marker:

```html
<!-- CHAPTER:09 -->
```

Keep the marker unchanged. The next chapter marker ends the current chapter.

Supported Markdown in the current renderer:

- headings: `#`, `##`, `###`;
- paragraphs;
- ordered and unordered lists;
- bold, italic, links, and inline code;
- blockquotes;
- fenced code blocks;
- simple pipe tables;
- single-line display equations enclosed by `$$`.

Use `LEAD:` at the start of a paragraph to create the chapter introduction.

## Change chapter metadata

Edit `data/chapters.csv`. Do not rename or reorder columns without updating the JavaScript.

Important fields:

- `id`: two-digit chapter ID;
- `title`: complete title;
- `short_title`: navigation label;
- `part`: exact course-part name;
- `order`: numerical order;
- `level`: introductory, intermediate, graduate, advanced, or research;
- `reading_time`: text such as `60 min`;
- `prerequisites`: chapter IDs separated with `|`;
- `status`: outline, draft, internal-review, revised, approved, published, or archived;
- `visibility`: private, preview, or public;
- `learning_objectives`: objectives separated with `|`;
- `keywords` and `topics`: values separated with `|`;
- `content_file`: Markdown file containing the chapter marker;
- `version` and `updated`: revise whenever the content changes.

CSV values containing commas must be enclosed in double quotes. A literal double quote inside a field must be written twice.

## Add a chapter

1. Choose an unused two-digit ID.
2. Add a complete row to `data/chapters.csv`.
3. Add `<!-- CHAPTER:ID -->` and the chapter Markdown to the appropriate content file.
4. Add glossary terms, references, and exercise rows as needed.
5. Preview and test direct access using `chapter.html?id=ID`.
6. Keep the chapter `private` and `draft` until review is complete.

## Add a reference

Edit `data/references.csv` and create a unique ID such as `R26`.

Use `chapter_ids` and `topic_tags` with `|` delimiters. Verify title, authors, year, venue, DOI, and access status against the original publisher or paper.

In chapter text, cite the reference ID in square brackets, for example `[R26]`. The current renderer displays the ID as text; a later build can create a linked bibliography automatically.

## Add a glossary term

Add a row to `data/glossary.csv`. Include concise and full definitions, the first chapter where the term is introduced, related terms separated with `|`, and source reference IDs where available.

## Add or change a pathway

Edit `data/pathways.csv`. Put the recommended chapter sequence in `chapter_ids`, separated with `|`.

## Add an exercise

Edit `data/exercises.csv`. Use a unique ID and link it to a chapter with `chapter_id`. Exercise prompts should also appear in chapter text unless a separate worksheet is added.

## Add diagrams and images

Create these directories when visual assets are ready:

```text
assets/diagrams/
assets/chapter-images/
assets/videos/
assets/simulations/
assets/datasets/
assets/downloadable-materials/
```

Preferred formats:

- SVG for diagrams, plots, and line art;
- PNG for transparency or interface screenshots;
- JPG or WebP for photographs;
- MP4/WebM for short video demonstrations.

Every figure requires a figure number, descriptive caption, alt text, source or attribution, and license. Keep an editable source file for original diagrams when possible.

## Review workflow

Use these states in order:

1. `outline`
2. `draft`
3. `internal-review`
4. `revised`
5. `approved`
6. `published`

A chapter should not become `approved` until scientific, editorial, reference, and visual review are complete.

## Publication procedure

Publication is intentionally not configured in this branch. After explicit approval:

1. review all chapters and references;
2. run responsive, accessibility, link, and performance tests;
3. update approved chapter metadata deliberately;
4. decide whether to merge the course under `/haptics-course/` or deploy it separately;
5. add a compact course link to the portfolio only after approval;
6. merge through a reviewed pull request;
7. verify the deployment and retain rollback instructions.
