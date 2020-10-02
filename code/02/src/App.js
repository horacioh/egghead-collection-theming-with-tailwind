import React from "react"

function App() {
  return (
    <div className="theme-light">
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
    </div>
  )
}

export default App
