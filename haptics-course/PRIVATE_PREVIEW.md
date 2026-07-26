# Private preview and deployment safety

## Current deployment behaviour

The repository's GitHub Pages workflow deploys only when changes are pushed to `main`. The `haptics-course` branch is not a deployment source.

## Safe review methods

### Local preview

```bash
git switch haptics-course
python -m http.server 8000
```

Open `http://localhost:8000/haptics-course/`.

### GitHub review

Review the branch files or the draft pull request. Do not merge the pull request.

## Prohibited before explicit approval

- merging `haptics-course` into `main`;
- editing `.github/workflows/pages.yml` to deploy this branch;
- changing repository Pages settings;
- linking `/haptics-course/` from the live homepage;
- marking the current draft as published;
- removing the private-draft banner or `noindex` metadata.

## Planned final path

The intended path after approval is:

```text
https://hassanwaseem.github.io/haptics-course/
```

This path does not exist on the live website until the course directory is intentionally merged into the deployed branch.

## Rollback after a future launch

A future launch should use a reviewed merge commit. Rollback can then be performed by reverting that merge or restoring the previous `main` commit. The existing portfolio backup strategy remains separate from this course workstream.
