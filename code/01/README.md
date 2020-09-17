# Theming with Tailwind 01: Setup Create-React-App

## Steps

```bash
npx create-react-app theming-with-tailwind
cd theming-with-tailwing
```

- replace `App.js` with

```javascript
import React from "react"

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
```

- `yarn start` and see the result

```bash
yarn add tailwindcss
tailwind init
```

- remove `App.css`, `logo.svg` and any other file not needed
- add at the top of index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- add new scripts:

```json
{
  // ...
  "scripts": {
    // ...
    "build:tailwind": "tailwindcss build src/index.css -o src/output.css",
    "prestart": "npm run build:tailwind",
    "prebuild": "npm run build:tailwind"
  }
}
```

- add `./src/output.css` to `.gitignore`

- stop and start server
- test the integration by adding the class `text-red-500` to the heading (`h1`)

---

## Additional Resources

- [Using Tailwind CSS with Create React App (Post)](https://daveceddia.com/tailwind-create-react-app/)
