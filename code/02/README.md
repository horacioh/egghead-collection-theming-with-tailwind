# Theming with Tailwind 02: Setup your Theme Colors

## Steps

- update the `tailwind.config.js` file:

```js
// tailwind.config.js

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        body: "var(--color-body)",
        "body-muted": "var(--color-body-muted)",
        background: "var(--color-background)",
        "background-muted": "var(--color-background-muted)",
      },
    },
  },
  variants: {},
  plugins: [],
}
```

- add the CSS Variables needed based on the themes you want to setup in `index.css` file

```css
/* index.css */
.theme-light {
  --color-primary: theme("colors.blue.700");
  --color-primary-hover: theme("colors.blue.800");

  --color-body: theme("colors.gray.700");
  --color-body-muted: theme("colors.gray.500");

  --color-background: theme("colors.gray.100");
  --color-background-muted: theme("colors.gray.200");
}

.theme-dark {
  --color-primary: theme("colors.blue.300");
  --color-primary-hover: theme("colors.blue.200");

  --color-body: theme("colors.gray.300");
  --color-body-muted: theme("colors.gray.500");

  --color-background: theme("colors.gray.900");
  --color-background-muted: theme("colors.gray.800");
}
```

- update `App.js` to see how we can use our new color classes

```js
// App.js

import React from "react"
import Layout from "./Layout"
import { useTheme } from "./ThemeContext"

function App() {
  return (
    <div className="w-screen h-screen bg-background p-16">
      <div className="mx-auto p-16 rounded-lg border-2 border-background-muted bg-background-muted max-w-3xl text-center shadow-lg">
        <h1 className="text-4xl font-bold text-center text-body">
          Theming using TailwindCSS and CSS Variables collection. Create React
          App version
        </h1>
        <p className="text-body-muted text-xl">
          Support Theming Using TailwindCSS and CSS Variables
        </p>
        <button
          onClick={() => {}}
          className="bg-primary text-white px-8 py-4 rounded text-xl font-bold mt-8 hover:shadow-lg"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  )
}

export default App
```

---

## Additional Resources

- [Official Docs: Extending the Default palette](https://tailwindcss.com/docs/customizing-colors#extending-the-default-palette)
