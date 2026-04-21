# UI Images Directory

Place all your screenshots and logo files in this directory (`public/assets/`).

When the React app builds, any files placed in `public/assets/` will be accessible at the root URL `/assets/`.

## Required File Names

For the website to automatically display your screenshots correctly, please ensure they are named exactly as follows (and converted to `.webp` format as per your architecture plan):

- **Hero Mockup:** `scoreboard_view.webp`
- **Hydration Card:** `hydration_view.webp`
- **Whole Foods Card:** `wholefoods_view.webp`
- **Sleep Battle Card:** `sleep_view.webp`
- **Logo:** `logo.svg` (I have already copied this one here for you)

If your exported files are `.png`, you can use a free online converter to make them `.webp` (which is much better for website loading speeds), or just drop the `.png`s in here and update the `src/App.jsx` to load `.png` instead.
