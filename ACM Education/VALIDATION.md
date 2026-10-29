# Validation

October 29, 2026.

- JavaScript syntax checked with Node for both scripts.
- Local assets, anchor destinations, unique HTML IDs checked.
- Included résumé matches the uploaded PDF byte for byte.
- Browser verified: both project filters, all-project reset, both detail dialogs,
  close control, keyboard focus, Ctrl+K, search and Enter navigation.
- Navigation search handles both section synonyms and unaccented `resume`.
- Copy-email action confirmed against the browser clipboard.
- Animation pause/resume state checked through its accessible control.
- Desktop (1363px), tablet (768px), and phone (390px and 320px) layouts inspected.
  Narrow layouts tested in actual browser iframe viewports. No horizontal page
  overflow after constraining the decorative canvas to its stage.
- Mobile navigation expansion, section selection and closure verified.
- Mobile project dialog fits its viewport and opens with its project title.
- No errors from the site's scripts in the browser log. An unrelated browser
  extension metadata error was excluded.

The temporary responsive QA page is excluded from the finished site. External
LinkedIn and mail links use the exact résumé details; no message was sent. This is
a static portfolio with no backend, form service, analytics, or external scripts.
