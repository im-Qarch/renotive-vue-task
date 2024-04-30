// @ts-check
/**
 * An standard community based lint config
 * tou can check the rules with visualize tool
 * for inspecting and understanding your ESLint flat configs.
 * @link [Inspector](https://eslint-config.antfu.me/configs)
 */
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
)
