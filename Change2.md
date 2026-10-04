# Change 2: Make work experience specific and outcome-focused

## Purpose

Help recruiters quickly identify each role’s scope and impact without introducing unsupported claims.

## Planned changes

- Give each role a title, company, dates, and three or four concise bullets.
- Use the uploaded résumé and previously supplied site text as the factual sources.
- Keep Otis achievements together where the résumé does not identify the promotion during which they occurred.
- Clearly label missing role details, outcomes, and useful metrics rather than guess.
- Retain the existing responsive Markdown/Jekyll layout with no new dependencies.
- Exclude this change log from generated site output.

## Result

- Reorganized `experience.md` into ten role entries, each with a title, company, dates, and three or four bullets.
- Kept Tanium’s four supplied accomplishments concise and retained its five-team/six-interview scope.
- Kept the résumé’s Otis achievements in a separate, four-bullet shared-impact summary instead of guessing which promotion they belong to. Retained the supplied portfolio, revenue, margin, savings, ranking, and award figures.
- Expanded the previously title-only earlier roles with clearly labeled prompts, not invented responsibilities or achievements.
- Reused the existing responsive page layout and styles. No dependencies were added; all site sources remain at the repository root.
- Excluded `Change2.md` from generated Jekyll output.

### Placeholders still to fill

There are **31 placeholder prompts** on the page: four additional metrics and 27 role-specific prompts.

#### Additional metrics

- **Tanium — Guardian AI PRD:** `[ADD METRIC: risk categories covered by the proposal]`
- **Tanium — Atlas AI pilot:** `[ADD METRIC: devices audited]`
- **Tanium — integration gap:** `[ADD METRIC: internal teams affected]`
- **Otis — pricing initiative:** `[ADD METRIC: change in bid win rate]`

#### Role-specific details

Each role below has three placeholders: `[ADD ROLE DETAIL]`, `[ADD OUTCOME]`, and `[ADD METRIC]`. The page includes the specific prompt text for each.

| Role | Role detail needed | Outcome needed | Metric needed |
| --- | --- | --- | --- |
| Otis Project Manager | Responsibilities specific to this promotion | Which shared Otis achievements belong here | Role-specific budget, team size, timeline, or result |
| Otis Senior Associate Project Manager | Responsibilities specific to this promotion | Which shared Otis achievements belong here | Role-specific budget, team size, timeline, or result |
| Otis Associate Project Manager | Responsibilities specific to this promotion | Which shared Otis achievements belong here | Role-specific budget, team size, timeline, or result |
| UIUC Undergraduate Teaching Assistant | Course and responsibilities | Teaching contribution or result | Students supported or another measure |
| Otis Project Management Intern | Project scope and responsibilities | Contribution or project result | Budget, timeline, team size, or result |
| Otis Materials Sourcing and Purchasing Intern | Sourcing or purchasing responsibilities | Contribution or sourcing result | Purchasing scope, timeline, or result |
| DuPont Technical Development Intern | Technical work and responsibilities | Contribution or development result | Project scope, timeline, or result |
| UIUC Engineering Open House Team Member | Team responsibilities and project description | Contribution or project result | Team size, timeline, or another measure |
| Danisco Research and Development Intern | Research focus and responsibilities | Contribution or research result | Research scope, timeline, or result |

Supply only figures you can substantiate. For Otis promotions, first assign the existing shared achievements to the correct role; reuse existing metrics where applicable rather than create new ones.

### Verification

- Jekyll build passed.
- Generated HTML checks confirmed ten role entries, company/date metadata, three or four bullets per entry, and 31 labeled placeholder prompts.
- Work Experience returned HTTP 200 through the Replit development URL.
- Checked the page in preview at 1280px and 375px widths.
- Confirmed `Change2.md` is excluded from site output; whitespace checks passed.