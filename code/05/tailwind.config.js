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
        "background-muted": "var(--color-background-muted)"
      }
    },
  },
  variants: {},
  plugins: [],
}
