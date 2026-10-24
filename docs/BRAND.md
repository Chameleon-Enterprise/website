# Brand and typography

## Direction

Chameleon Enterprise provides adaptable professional services in operations, IT, and HR. Lead with the people who make a business work: their judgment, creativity, relationships, and ability to grow. Describe technology and AI as useful support for that work. Keep copy practical, clear, and grounded in owner-provided facts.

## Logo

The full business name is **Chameleon Enterprise Ltd Co**. Use this full name in copyright notices. The public-facing logo and marketing name may remain Chameleon Enterprise.

`assets/chameleon-enterprise-logo.png` is the current transparent raster wordmark. The chameleon forms the initial C, with a curled tail, recognizable head, and restrained teal markings. Use it on white or another very light background; do not recolor the lettering, distort the aspect ratio, or detach the symbol from the wordmark without a separate approved asset.

The generated lettering is part of the image, not live text set in the website fonts. Keep the transparent padding around the artwork. The image is a working identity asset; no vector master or trademark clearance is implied.

`assets/favicon.png` contains the standalone chameleon without lettering, on a white badge with transparent outer corners for visibility in light and dark browser chrome. It is exported at 64×64 for browser tabs, with `assets/apple-touch-icon.png` exported at 180×180 for touch icons. The Pages workflow includes both automatically as part of `assets/`.

## Typography

| Role | Font | Weight | Treatment |
| --- | --- | --- | --- |
| Main heading and hero statement | Source Serif 4 | 500 | Large editorial serif, close tracking, short lines |
| Section and service headings | Source Serif 4 | 500 | Same family, smaller scale |
| Body copy | Inter | 400 | Readable slate text with generous line spacing |
| Navigation and buttons | Inter | 400–500 | Clear sentence case, deliberately sized controls |
| Footer and captions | Inter | 400 | Smaller supporting text |

CSS tokens `--font-heading` and `--font-body` define the families. Both fonts are self-hosted variable WOFF2 files under `assets/fonts/`, loaded with `font-display: swap`. The supplied subsets cover Latin text and common punctuation. Review font coverage when adding other languages; use fallback fonts until an appropriate subset is included.

## Palette

| Token/use | Color |
| --- | --- |
| Primary navy | `#152a45` |
| Body slate | `#526173` |
| White background | `#ffffff` |
| Pale slate service band | `#f1f4f8` |
| Rules/borders | `#c6cfda` |
| Logo teal accent | approximately `#268f91` |

Keep teal restrained within the logo. Do not use the accent for small body text without checking contrast.

## Font sources and licenses

- Source Serif 4: [Google Fonts source](https://github.com/google/fonts/tree/main/ofl/sourceserif4); license included as `assets/fonts/Source-Serif-4-OFL.txt`.
- Inter: [Google Fonts source](https://github.com/google/fonts/tree/main/ofl/inter); license included as `assets/fonts/Inter-OFL.txt`.
- Optimized Latin WOFF2 files were retrieved from Google Fonts on October 23, 2026. See `assets/fonts/README.md` for exact download URLs.

Preserve both license notices when redistributing the font files.
