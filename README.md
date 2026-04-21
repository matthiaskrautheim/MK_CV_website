# Matthias Krautheim — Website UI Kit

Hi-fi recreation of the one-page CV / portfolio website. This kit wires together every component that appears on the live page, with small, focused JSX files so they can be reused in other designs.

## Files

```
index.html                     ← full assembled page (what the card previews)
components/
  SiteHeader.jsx               ← sticky translucent header + nav + CTA
  Hero.jsx                     ← two-column hero with headline + profile panel
  Section.jsx                  ← section wrapper (normal / alt bg)
  Eyebrow.jsx                  ← magenta uppercase lead-in
  Card.jsx                     ← rounded paper card with optional eyebrow
  CardGrid.jsx                 ← responsive 2 / 3 column grid
  ExpertiseGrid.jsx            ← the 6 "Core Expertise" cards
  Timeline.jsx + TimelineItem  ← experience timeline
  TagList.jsx                  ← skill pills
  DownloadBand.jsx             ← dark navy CV CTA band
  ContactPanel.jsx             ← contact block
  SiteFooter.jsx               ← footer
  Icon.jsx                     ← Lucide outline icon wrapper
  Button.jsx                   ← primary / secondary / ghost
  PortraitPlaceholder.jsx      ← CV-hero placeholder
```

All components consume the tokens defined in `../../colors_and_type.css`.

## Contract

- Every component takes `children` where it makes sense, and otherwise named props.
- Copy comes in from the parent — no component hardcodes the person's biography.
- `Icon` takes a `name` prop matching a Lucide icon name; new icons are added by extending the inline SVG sprite in `Icon.jsx`.

## Interactions recreated

- Nav anchor links smooth-scroll to sections (browser default + `scroll-behavior: smooth`).
- Download-CV button is wired to an href (dead link in this prototype).
- Tag list is static (no filtering implemented — this matches the original).
- Sticky header remains translucent on scroll.

## Visual notes

Kept exactly to the foundations: Fraunces for H1/H2, Inter everywhere else, navy + magenta only as accents, cool-paper background, rounded-corner cards with soft diffuse shadow, no gradients, no icon-decoration, no emoji.
