/**
 * ?Uno CSS Configuration File
 * This file serves as the configuration file for Uno, our CSS build tool.
 * Uno is The instant on-demand Atomic CSS engine.
 * used to manage the compilation, optimization, and bundling of CSS files for our project
 *
 * Why Use Uno for CSS:
 * - UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible.
 * - The core is un-opinionated and all the CSS utilities are provided via presets.
 *
 * Resources:
 * - @link [Uno CSS Documentation](https://unocss.dev/)
 * - @link [Project GitHub Repository](https://github.com/unocss/unocss)
 *
 * Author: [Qarch]
 * Date: [30.04.2024]
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    /**
     * Presets are the heart of UnoCSS.
     * They let you make your own custom framework in minutes.
     * @link [Documentation](https://unocss.dev/guide/presets)
     */
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  /**
   * UnoCSS also supports the theming system that you might be familiar with in Tailwind CSS,... .
   * At the user level, you can specify the theme property in your config*,
   * and it will be deep-merged to the default theme.
   */
  theme: {
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
      '3xl': '2100px',
      '4xl': '3000px',
    },
    maxWidth: {
      '8xl': '1440px',
    },
    colors: {
      /**
       * use primary key for had cleaner code
       * and can change colors instantly in all project
       * standard color palette referenced in tailwind doc
       * @link [Tailwind Documentation](https://tailwindcss.com/docs/customizing-colors)
       */
      primary: {
        DEFAULT: '#10B981',
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
        950: '#022C22',
      },
      red: {
        DEFAULT: '#F43F5E',
        50: '#FFF1F2',
        100: '#FFE4E6',
        200: '#FECDD3',
        300: '#FDA4AF',
        400: '#FB7185',
        500: '#F43F5E',
        600: '#E11D48',
        700: '#BE123C',
        800: '#9F1239',
        900: '#881337',
        950: '#4C0519',
      },
    },
  },
})
