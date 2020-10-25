# Theming with Tailwind 02: Setup your Theme Context

## Steps

- create a new file called `ThemeContext.js` and add the next code

```js
import React from "react"

const ThemeContext = React.createContext("theme-light")

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("theme-dark")

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "theme-light" ? "theme-dark" : "theme-light"
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error(`"useTheme" must be called inside a "ThemeProvider"`)
  }

  return context
}
```

- go to `index.js` and wrap your `App` component with your new `ThemeProvider` component

```js
// src/index.js
import React from "react"
import ReactDOM from "react-dom"
import "./output.css"
import App from "./App"
import { ThemeProvider } from "./ThemeContext"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

- go to `App.js` and use your theme to apply it to the wrapper div of your app

```js
import React from "react"
import { useTheme } from "./ThemeContext"

function App() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <h1 className="text-primary">Hello World</h1>
    </div>
  )
}

export default App
```
