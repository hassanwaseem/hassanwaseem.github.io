# Website editing guide

This site is a static, single-page portfolio. Most routine updates are made in CSV files, so publications, awards, patents, projects, service, outreach, and education can be updated without changing the page layout.

## Before editing

The public site is served from the main branch. A commit to main normally becomes public after GitHub Pages rebuilds the site.

For the safest workflow:

1. Open the repository on GitHub.
2. Create a short-lived branch from main, such as content-update-2026-07.
3. Make and preview the changes on that branch.
4. Merge the branch into main only after checking it.
5. Keep legacy-site unchanged. It is the permanent backup of the previous website.

For a very small, urgent text correction, you can edit main directly, but the change may become public within a few minutes.

## File map

| File or folder | What it controls |
|---|---|
| index.html | Page sections, introductory text, headings, profile links, contact details, portrait caption, and SEO metadata |
| assets/site.css | Colours, typography, spacing, desktop/mobile layouts, cards, and navigation |
| assets/app.js | CSV loading, selected-publication cards, filters, search, and dynamically rendered lists |
| assets/data-utils.js | CSV schemas and readable validation errors |
| data/publications.csv | Complete publication record and the visual Selected publications cards |
| data/awards.csv | Awards and distinctions |
| data/patents.csv | Patents |
| data/service.csv | Academic service and review activity |
| data/funded-projects.csv | Funded project timeline |
| data/outreach.csv | Outreach, exhibitions, and event activity |
| data/theses.csv | Degrees and theses |
| data/projects.csv | Archived structured project records; not currently displayed because the separate Selected projects section was removed |
| assets/project-images/ | Images used by Selected publications |
| images/waseempicture.jpg | Homepage portrait |
| assets/cv_waseemhassan.pdf | CV opened by the View CV links |

## Editing a CSV safely

All CSV files use the first row as a fixed header. Do not rename, remove, or reorder header columns unless you are also updating the code.

Recommended rules:

- Keep one record per line.
- Give every record a unique id containing only lowercase letters, numbers, and hyphens.
- Keep text fields inside double quotation marks.
- If text itself contains a double quote, represent it as two double quotes.
- Do not use commas outside quoted fields.
- Keep record_status as published for visible records.
- Use whole numbers for display_order.
- Save as UTF-8 CSV.
- Do not use Excel formulas in the CSV.
- After exporting from Excel or Google Sheets, reopen the CSV as plain text and confirm that URLs, years, and quotation marks were not changed.

The page shows a readable error in the Publications section if a required field is missing or the CSV is malformed.

## Add a publication

Edit data/publications.csv and add one row below the header.

Columns:

| Column | Meaning |
|---|---|
| id | Unique permanent identifier, for example c19-example-2026 |
| year | Publication year |
| type | Displayed type, such as Conference Paper, Journal Article, Demo, Work-in-Progress, Domestic Conference, or Student Challenge |
| title | Full paper title |
| authors | Authors separated with semicolons |
| venue | Journal or conference name |
| themes | One or more exact theme codes separated with a vertical bar |
| award | Award text, or leave empty |
| doi | DOI without requiring an https prefix |
| publisher_url | DOI or publisher webpage |
| pdf_url | Local PDF path or a full external URL |
| video_url | Video URL, or leave empty |
| presentation_url | Presentation URL, or leave empty |
| image | Image path for a selected publication card |
| featured | true to include the paper in Selected publications; false otherwise |
| display_order | Order among records from the same year |
| record_status | Use published |

Valid theme codes are:

- contactless-body
- interfaces-embodied
- computational-perception

A paper can use multiple themes, for example:

~~~text
contactless-body|computational-perception
~~~

Example row:

~~~csv
"c19-example-2026","2026","Conference Paper","Example Paper Title","Waseem Hassan; Coauthor Name","ACM CHI 2026","contactless-body|computational-perception","","10.0000/example","https://doi.org/10.0000/example","assets/ExamplePaper2026.pdf","https://youtu.be/example","","assets/project-images/example-paper.webp","true","1","published"
~~~

Put a local paper PDF inside assets/ and use a relative path such as assets/ExamplePaper2026.pdf. External PDF links are also supported.

## Choose the Selected publications

The image-based cards at the beginning of Publications are generated automatically from data/publications.csv.

To add a card:

1. Find the publication row.
2. Set featured to true.
3. Put an image path in image.
4. Save the CSV.

To remove a card, set featured to false. You can leave its image path in place for future reuse.

Selected publications are sorted by newest year first and then by display_order within the same year. The first six cards appear immediately; additional selected papers appear after the visitor chooses Show all selected publications.

No HTML or JavaScript editing is needed.

## Add or change a selected-publication image

Place the image in assets/project-images/ and enter its relative path in the publication's image field, for example:

~~~text
assets/project-images/heartbeat-resonance.webp
~~~

Supported browser image formats include:

- WebP: preferred for most publication figures and photographs because it is usually much smaller.
- PNG: good for diagrams, screenshots, text-heavy figures, and transparency.
- JPG or JPEG: good for photographs without transparency.
- SVG: suitable for genuine vector diagrams or icons. Use only SVG files that you created or trust.
- GIF: works, but avoid large animated GIFs because they slow the page.

PNG and JPG/JPEG are completely acceptable; WebP is a performance preference, not a requirement.

Image recommendations:

- Use a 16:9 crop when possible, ideally about 1200 × 675 px or 1600 × 900 px.
- The card is always 16:9 and uses object-fit: cover, so a non-16:9 image will be cropped at its edges.
- Keep each image preferably below 500 KB and generally below 1 MB.
- Use clear figures with readable content and enough contrast.
- Avoid generic stock imagery.
- Use short lowercase filenames with hyphens and no spaces, for example heartbeat-resonance.webp.
- Make sure you have permission to publish the image. A figure from your own author manuscript is normally preferable to copying a publisher-formatted figure.
- Check mobile display after adding text-heavy scientific figures; small labels may be unreadable.

If image is empty for a featured publication, the site shows a placeholder rather than silently dropping the paper.

## Change the homepage portrait

Replace images/waseempicture.jpg with the new photograph while keeping the same filename, or change the image path in index.html.

If the filename or format changes, update all three references in index.html:

1. The Open Graph image.
2. The structured-data image.
3. The portrait img element.

Use a portrait-oriented image with good headroom. JPG is suitable; WebP or PNG also works if the references are updated.

## Update the introduction, title, or affiliation

Edit index.html.

The homepage wording is inside the section with id="home". Search for:

- Waseem Hassan
- Marie Skłodowska-Curie Postdoctoral Fellow
- the introductory paragraph
- the affiliation paragraph

Also update the following metadata near the top of index.html when the professional title or affiliation changes:

- meta description
- og:title and og:description
- structured-data jobTitle
- structured-data affiliation

Keeping the visible introduction and metadata consistent helps search engines and link previews.

## Update research themes or section wording

Edit index.html for theme titles, explanations, bullet points, and static section headings.

Do not change these theme codes unless you also update assets/app.js and every affected publication row:

- contactless-body
- interfaces-embodied
- computational-perception

## Add an award

Add a row to data/awards.csv.

Required fields are id, year, title, organization, display_order, and record_status. related_work and notes may be empty.

## Add a patent

Add a row to data/patents.csv.

Required fields are id, year, status, title, inventors, display_order, and record_status. Add publisher_url or pdf_url when a public record is available.

## Add a funded project

Add a row to data/funded-projects.csv.

The displayed columns are years, programme, title, description, and role. Use display_order to control timeline order. Do not include confidential information or funding amounts.

## Add academic service

Add a row to data/service.csv.

The page deliberately condenses service into three displayed groups:

- Rows whose category is Peer review are grouped under Peer review.
- Rows whose category is Professional membership are grouped under Professional memberships.
- All other categories are grouped under Editorial & committee roles.

Use those category spellings exactly when you want the first two groups.

## Add outreach or education

Use data/outreach.csv for exhibitions, public engagement, talks, or organized events.

Use data/theses.csv for degrees and theses. A thesis PDF can be stored in assets/, and a presentation can use a full external URL.

## Add a video or presentation link

For a publication, enter a complete https URL in video_url or presentation_url in data/publications.csv.

For supported records, the relevant link appears automatically. YouTube and other public video platforms are acceptable. Test the link in a private/incognito browser window so that it does not depend on your signed-in account.

## Update the CV

The simplest method is to replace assets/cv_waseemhassan.pdf with the new PDF while keeping the filename unchanged.

Before uploading:

- Open the PDF and verify all pages.
- Remove private addresses, signatures, phone numbers, or other information you do not want public.
- Keep the file reasonably small.
- Confirm both View CV links still open it.

If you rename the PDF, update every occurrence of assets/cv_waseemhassan.pdf in index.html.

## Preview locally

Do not open index.html directly with a file:// URL. The browser will usually block loading the CSV files.

From the repository folder, run either:

~~~bash
python -m http.server 8000
~~~

or:

~~~bash
python3 -m http.server 8000
~~~

Then open http://localhost:8000/.

Check:

1. Desktop and narrow mobile widths.
2. The mobile menu.
3. All anchor navigation links.
4. Selected-publication images.
5. Publication search and every filter.
6. Show all buttons.
7. CV, PDFs, videos, and profile links.
8. Browser developer console for errors.
9. Direct anchors such as http://localhost:8000/#publications.

Stop the server with Ctrl+C.

## When code editing is needed

Ordinary content updates do not require coding.

Edit index.html only for static wording, page sections, profile links, contact information, SEO metadata, or the portrait path.

Edit assets/site.css for visual design, colours, spacing, typography, breakpoints, or card layout.

Edit assets/app.js only when changing dynamic behavior, sorting, filters, displayed fields, or how CSV rows are rendered.

Edit assets/data-utils.js only when adding a dataset, changing required columns, or changing CSV validation.

Before changing JavaScript or CSS, create a branch and test both desktop and mobile layouts.

## Publish an approved update

Recommended GitHub workflow:

1. Create a branch from main.
2. Make the edits.
3. Preview and test them.
4. Commit with a clear message, such as Add 2026 publications.
5. Open a pull request into main.
6. Review the changed files.
7. Merge the pull request.
8. Wait a few minutes for GitHub Pages.
9. Open https://hassanwaseem.github.io/ in a private/incognito window and hard-refresh it.

If a change does not appear immediately, GitHub Pages or the browser cache may still be updating.

## Roll back

The previous website is permanently preserved on legacy-site.

For a recent content error, the preferred recovery is to revert the specific commit or pull request on main.

For a full restoration of the old website, merge or restore the exact legacy-site revision onto main. Do not alter legacy-site itself. Confirm the target and backup the current main branch before a full restoration.
