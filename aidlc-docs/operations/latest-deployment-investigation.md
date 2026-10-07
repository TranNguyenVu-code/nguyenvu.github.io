# Latest Deployment Investigation

User requested checking the failed latest GitHub deployment. Existing website/workflow is unchanged and working tree was clean. Run 37642287945 on main, commit 540887709bb048e08ef33cf498b92b6c05be1d81: build and artifact upload succeeded; deploy job never started. Run web annotation reports Internal server error, correlation ID fade8751-5223-4f0c-917b-74b122b41e14. Environment github-pages allows main; Pages uses the Actions workflow. Deprecation warnings were non-blocking.

- [x] Inspect run/jobs/logs and environment branch configuration.
- [x] Locate actual workflow-level GitHub internal error in the run HTML.
- [x] Request retry for the same commit: failed-jobs-only retry was rejected because no failed job existed; full workflow rerun accepted.
- [x] Monitor retry and verify resulting published site.
- [x] Record final results in audit/state and investigation summary.

No source/workflow changes warranted by current evidence. Existing disabled security/PBT extensions N/A; enforcement skipped. Read-only diagnosis and retry of the already user-initiated release remain within the task scope. GitHub Actions permissions endpoint returned 403; needed run/environment evidence was available through other endpoints.

## Resolution

Full rerun accepted as attempt 2 of run 37642287945. Build succeeded in 28 seconds and deployment succeeded in 17 seconds; run concluded success. The same commit was published, with no app/workflow/settings change. Live Pages HTML served the student title and project-base JS bundle. Published JS includes the current Gmail address and GitHub profile. Live site: https://trannguyenvu-code.github.io/nguyenvu.github.io/.

The failure was a transient GitHub internal server error before deploying, not a build regression. Action-runtime deprecation warnings remained non-blocking. No dependency/action upgrade was needed for this recovery.
