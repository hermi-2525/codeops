# Day 14 Mini-Project — Rebuild a Real Layout

## Interface
A fictional **TeleBirr-style account dashboard**. The content is placeholder practice content, not an official TeleBirr interface.

## Grid
Grid creates the page skeleton with named areas:
- header
- sidebar
- main
- footer

Grid is also used for the dashboard panel section and the responsive service cards.

## Flexbox
Flexbox is used for:
- top navigation
- sidebar links
- welcome/action row
- stat cards
- transaction rows
- quick-action buttons

## Required Day 14 techniques
- `grid-template-areas`
- `repeat(auto-fit, minmax(220px, 1fr))`
- sticky header
- relative parent + absolute `NEW` badge
- `z-index`
- `flex-wrap`
- `gap`
- one media query collapsing the page to one column under 700px
