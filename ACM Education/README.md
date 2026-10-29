# Vishruth Yakkanti — Personal Portfolio

A responsive portfolio built with plain JavaScript, HTML, and CSS. No framework,
package installation, API key, or build process is required.

## Open it locally

Open `dist/index.html` in a modern browser. All assets are included. You can also
open the folder with VS Code and use Live Server if you prefer automatic refresh.

## Make it yours

| File | What to edit |
| --- | --- |
| `dist/content.js` | Bio, email, verified social URLs, projects, skills, education, organizations, credentials. |
| `dist/styles.css` | Colors in `:root`, type sizes, spacing, responsive layouts. |
| `dist/script.js` | Interactions, filtering, dialogs, keyboard navigation, the orbital canvas. |
| `dist/index.html` | Section headings, navigation, metadata, and page structure. |
| `dist/assets/vishruth-yakkanti-resume.pdf` | Replace this file to update the downloadable résumé. |
| `dist/assets/favicon.svg` | The browser-tab icon. |

Start with `content.js`. Text is grouped by section and annotated. Save your
changes, then refresh the page. Strings use JavaScript syntax: keep their quotes
and commas. Escape an apostrophe (`\'`) if it appears inside a single-quoted string,
or use double quotes around that string instead.

### Add GitHub or project links

The résumé did not provide a GitHub profile or public project links, so those
fields are `null`. Set `profile.github` to your verified URL to show GitHub in the
contact section and quick navigation. Set a project's `url` or `source` to show
working links in its details dialog. Until then, project buttons open descriptions
of the actual work; they do not point to guessed URLs.

Add a new project by copying a project object in `content.js`, giving it a unique
`id`, and editing its content. The existing filters support `Research` and
`Robotics`. To introduce another category, add its filter button in `index.html`.
The two built-in illustration choices are `research` and `robotics`.

### Change the orbital graphic

Search for `THE CURIOSITY ENGINE` in `script.js`. `MAJOR_RADIUS` and
`MINOR_RADIUS` change its shape. `U_SEGMENTS` and `V_SEGMENTS` change the wireframe
density. Mint colors are set in `draw()`. The graphic is original decorative
artwork; it does not represent research results or robot measurements.

### Useful interactions

- Filter the two featured projects and open their details.
- Press Ctrl+K on Windows or Command+K on macOS for quick navigation.
- Use Escape to close dialogs; native dialogs contain keyboard focus.
- Pause the orbital animation with its visible button. The preference is saved
  locally, and the default follows the operating system's reduced-motion setting.
- Use the copy-email button, email link, LinkedIn link, or PDF résumé link.
- On small screens, the navigation switches to an accessible menu.

## Content choices

The supplied résumé is the factual source for the biography, skills, two projects,
education, organizations, and credentials. Go is categorized as a language (the
résumé lists Golang among tools). Areas of study are not labeled as completed
courses. The paper is described as in progress and intended for peer review, not
as a publication. The AI club role has no invented date. Credential issuers and
unprovided project metrics are omitted. No photograph or GitHub account was
invented. The original résumé is included unchanged.

The footer links to the ECS Webring directory. It does not claim membership or
include previous/next links, which require approval and an entry in the directory.

## Reference review

See `REFERENCE_REVIEW.md` for the 16 portfolios checked, retrieval limitations,
and the shared structure used for this design.

## Hosting

Deploy the contents of `dist/` to a static host. In the hosted checkout,
`.openai/hosting.json` belongs to the connected Site and preserves its identity.
The portable source download excludes this hosting identity. This first Site is
private to its owner. Changing it to a public recruiting link is a separate
sharing choice.
