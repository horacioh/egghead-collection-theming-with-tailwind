import React from 'react';
import { useTheme } from './ThemeContext'

function App() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <h1 className="text-primary">
        Hello World
      </h1>
    </div>
  );
}

export default App;
