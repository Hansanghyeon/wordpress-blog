/** @type {import('tailwindcss').Config} config */
module.exports = {
  darkMode: 'class',
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  plugins: [
    require('@workspaces/project-tailwindcss-config'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
  ],
}
