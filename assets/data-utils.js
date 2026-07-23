export const DATASETS = {
  publications: {
    path: "data/publications.csv",
    required: ["id", "year", "type", "title", "authors", "venue", "themes", "display_order", "record_status"]
  },
  projects: {
    path: "data/projects.csv",
    required: ["id", "title", "summary", "themes", "venue", "year", "image", "image_alt", "featured", "display_order", "record_status"]
  },
  awards: {
    path: "data/awards.csv",
    required: ["id", "year", "title", "organization", "display_order", "record_status"]
  },
  patents: {
    path: "data/patents.csv",
    required: ["id", "year", "status", "title", "inventors", "display_order", "record_status"]
  },
  service: {
    path: "data/service.csv",
    required: ["id", "category", "role", "organization", "years", "display_order", "record_status"]
  },
  theses: {
    path: "data/theses.csv",
    required: ["id", "degree", "field", "institution", "year", "title", "display_order", "record_status"]
  },
  outreach: {
    path: "data/outreach.csv",
    required: ["id", "year", "type", "title", "organization", "display_order", "record_status"]
  },
  fundedProjects: {
    path: "data/funded-projects.csv",
    required: ["id", "years", "title", "programme", "description", "display_order", "record_status"]
  }
};

export function parseCsv(source, fileName = "CSV") {
  const text = source.replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(field.trim());
      field = "";
    } else if (character === "\n") {
      row.push(field.trim());
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
    } else if (character !== "\r") {
      field += character;
    }
  }

  if (quoted) throw new Error(`${fileName}: an opening quote is not closed.`);
  row.push(field.trim());
  if (row.some((value) => value !== "")) rows.push(row);
  if (rows.length < 2) throw new Error(`${fileName}: expected a header and at least one data row.`);

  const headers = rows[0].map((header) => header.trim());
  const duplicates = headers.filter((header, index) => headers.indexOf(header) !== index);
  if (duplicates.length) throw new Error(`${fileName}: duplicate column ${duplicates[0]}.`);

  return rows.slice(1).map((values, index) => {
    if (values.length > headers.length) {
      throw new Error(`${fileName}, row ${index + 2}: too many columns. Check commas and quotation marks.`);
    }
    return Object.fromEntries(headers.map((header, column) => [header, values[column] ?? ""]));
  });
}

export function validateDataset(name, rows) {
  const config = DATASETS[name];
  if (!config) throw new Error(`Unknown dataset: ${name}.`);
  const errors = [];
  const ids = new Set();

  rows.forEach((row, index) => {
    const rowNumber = index + 2;
    if (row.record_status === "example") return;

    config.required.forEach((field) => {
      if (!String(row[field] ?? "").trim()) errors.push(`${config.path}, row ${rowNumber}: “${field}” is required.`);
    });

    if (row.id) {
      if (ids.has(row.id)) errors.push(`${config.path}, row ${rowNumber}: duplicate id “${row.id}”.`);
      ids.add(row.id);
    }

    if (row.year && !/^\d{4}(?:–\d{4}|–present)?$/i.test(row.year)) {
      errors.push(`${config.path}, row ${rowNumber}: “year” should start with a four-digit year.`);
    }
  });

  if (!rows.some((row) => row.record_status === "example")) {
    errors.push(`${config.path}: include one row with record_status set to “example”.`);
  }

  if (errors.length) throw new Error(errors.join("\n"));
  return rows.filter((row) => row.record_status !== "example" && row.record_status !== "draft");
}

export function splitList(value) {
  return String(value || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function isTruthy(value) {
  return ["true", "yes", "1"].includes(String(value).toLowerCase());
}

export function displayOrder(row) {
  const value = Number.parseInt(row.display_order, 10);
  return Number.isFinite(value) ? value : 9999;
}
