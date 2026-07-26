# Haptics: Foundations, Interfaces, and Perception

Private development build of a graduate-level haptics course for Waseem Hassan's academic website.

## Publication status

- Branch: `haptics-course`
- Visibility: private development draft
- Live deployment: not authorized
- Link from portfolio: not authorized
- Scientific review: pending
- Editorial review: pending

The live GitHub Pages workflow deploys only pushes to `main`. This course must not be merged into `main` or linked from the portfolio until Waseem Hassan explicitly approves publication.

## Current build

The draft contains:

- a course landing page;
- a five-part syllabus with 24 chapters;
- first-pass graduate notes for every chapter;
- a dynamic chapter reader with table of contents and previous/next navigation;
- chapter search and filters;
- seven research pathways;
- a searchable glossary;
- CSV metadata for chapters, references, glossary terms, pathways, and exercises;
- responsive, reduced-motion, print, keyboard, and focus styles;
- private-preview and editing instructions.

All chapter content is marked `draft` and `private` in `data/chapters.csv`.

## Preview locally

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/haptics-course/
```

Do not open the HTML files directly with `file://`; browser security rules will block CSV and Markdown loading.

## File structure

```text
haptics-course/
├── index.html
├── chapter.html
├── glossary.html
├── pathways.html
├── COURSE_SPECIFICATION.txt
├── COURSE_EDITING_GUIDE.md
├── PRIVATE_PREVIEW.md
├── README.md
├── assets/
│   ├── course.css
│   ├── course.js
│   └── chapter.js
├── content/
│   ├── part-1-foundations.md
│   ├── part-2-engineering.md
│   ├── part-3-rendering.md
│   ├── part-4-computational.md
│   └── part-5-frontiers.md
└── data/
    ├── chapters.csv
    ├── exercises.csv
    ├── glossary.csv
    ├── pathways.csv
    └── references.csv
```

## Content model

Long-form teaching material is Markdown. Metadata is CSV. The chapter reader identifies chapters using markers such as:

```html
<!-- CHAPTER:01 -->
```

The matching `content_file` is specified in `data/chapters.csv`.

## Review priorities

1. Verify scientific claims and terminology chapter by chapter.
2. Validate all reference metadata and add direct links where permitted.
3. Add original diagrams with captions, attribution, licensing, and alt text.
4. Expand worked examples and practical exercises.
5. Add answer keys in a non-public instructor directory.
6. Test the material with graduate students.
7. Run accessibility, link, responsive, and performance audits.
8. Obtain explicit approval before publication.
