## Avature Wallet Screen

This project contains a small React + Vite app that implements the **Avature Wallet** mobile screen based on the provided Figma design.

### Stack

- **Framework**: React (function components)
- **Bundler/Dev server**: Vite
- **Styling**: Hand-written CSS (no Tailwind; the Figma Tailwind-like classes were translated into regular CSS while preserving the visual design).

### Running the app

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the printed local URL in a browser. You should see the Avature Wallet mobile layout centered in the viewport.

### Component

The main screen implementation is in:

- `src/components/AvatureWallet.tsx`

You can reuse this component in another React app by copying the component file and the relevant styles from `src/styles.css`.

