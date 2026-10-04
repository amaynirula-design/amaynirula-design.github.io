# Change 2: Make work experience specific and outcome-focused

## Purpose

Help recruiters quickly identify each role’s scope and impact without introducing unsupported claims.

## Planned changes

- Give each role a title, company, and dates.
- Include achievement bullets only where the résumé supplies the supporting facts.
- Use the uploaded résumé and previously supplied site text as the factual sources.
- Keep Otis achievements together where the résumé does not identify the promotion during which they occurred.
- Omit role details and metrics that are not supplied instead of guessing.
- Retain the existing responsive Markdown/Jekyll layout with no new dependencies.
- Exclude this change log from generated site output.

## Result

- Reorganized `experience.md` into ten role entries with verified titles, companies, and dates.
- Kept Tanium’s four supplied accomplishments concise and retained its five-team/six-interview scope.
- Kept Otis promotion titles and dates separate, and listed the supplied Otis accomplishments in a distinct company-tenure section rather than guessing which promotion they belong to.
- Listed earlier roles with their verified titles, companies, and dates only; the résumé does not provide additional role-specific responsibilities or outcomes for these positions.
- Removed all fill-in text. Metrics not supplied—such as device count, PRD risk categories, affected team count, and bid win-rate change—are omitted.
- Reused the existing responsive page layout and styles. No dependencies were added; all site sources remain at the repository root.
- Excluded `Change2.md` from generated Jekyll output.

### Verification

- Jekyll build passed.
- Generated HTML checks confirmed all ten role titles, companies, and dates, and verified that no bracketed fill-in text remains.
- Work Experience returned HTTP 200 through the Replit development URL.
- Checked the page in preview at 1280px and 375px widths.
- Confirmed `Change2.md` is excluded from site output; whitespace checks passed.