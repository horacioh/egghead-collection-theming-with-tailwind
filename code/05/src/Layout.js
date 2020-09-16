import React from 'react';
import { useTheme } from './ThemeContext'

export default function Layout({ children }) {
  const { theme } = useTheme()
  return (
    <div className={`${theme}`}>
      {children}
    </div>
  );
}
