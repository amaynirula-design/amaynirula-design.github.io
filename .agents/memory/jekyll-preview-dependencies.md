---
name: Jekyll preview dependencies
description: Bundler dependency resolution differences between interactive shells and Replit-managed Jekyll workflows.
---

When a manual Jekyll server works but its Replit-managed workflow cannot resolve locked gems, compare Bundler's configured path with the shell's gem home. Install dependencies using the project-local Bundler configuration, and exclude that dependency directory from Jekyll output.

**Why:** A workflow may use a project-local bundle path even when an earlier shell install populated only the user-level gem directory.

**How to apply:** Check `bundle config`, `bundle check`, and the workflow log before retrying. Run `bundle install` with the project's settings, verify the build, then restart the managed workflow.