# Theming with Tailwind 02: Setup your Theme Colors

## Steps

- add the CSS Variables needed based on the themes you want to setup in `index.css` file

```css
/* index.css */
.theme-light {
  --color-primary: theme("colors.blue.700");
}

.theme-dark {
  --color-primary: theme("colors.blue.300");
}
```

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
      },
    },
  },
  variants: {},
  plugins: [],
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
    <div className="theme-light">
      <h1 className="text-primary">Hello World</h1>
    </div>
  )
}

export default App
```

---

## Additional Resources

- [Official Docs: Extending the Default palette](https://tailwindcss.com/docs/customizing-colors#extending-the-default-palette)
