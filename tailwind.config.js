import { colors, screens, textsPlugin, spacingPlugin } from './utils/theme';

export default {
  darkMode: 'class',
  content: [
    './assets/**/*.css',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    screens,
    extend: {
      colors,
    },
    fontFamily: {
      assistant: ['assistant', 'sans-serif'],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    textsPlugin,
    spacingPlugin
  ]
};


