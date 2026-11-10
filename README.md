# Stonebase — website

The static site for [Stonebase](https://leogenot.github.io/stonebase-site/), a training log, project book and coaching notebook for climbers on iPhone and iPad.

It uses the app's own editorial design language: ink on paper, hairline rules instead of cards, large light Instrument Sans display type, Space Mono micro-labels and a bracket button. The four themes (Clay, Moss, Mist, Dusk), each light and dark, use the app's palettes, and every screenshot is captured from the app in all eight combinations.

## Structure

```
index.html        the page
assets/style.css  palettes and components
assets/theme.js   theme switcher (swaps the palette and the screenshots)
shots/<tone>-<mode>/*.jpg   app screenshots, one folder per theme
```

No build step. Open `index.html` locally, or serve the folder:

```bash
python3 -m http.server
```

GitHub Pages publishes from the root of `main`.
