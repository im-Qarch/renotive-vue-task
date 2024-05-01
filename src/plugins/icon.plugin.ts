/**
 * @description bundles icons in app and making icon data available offline.
 * {@link https://iconify.design/}
 * {@link https://icones.netlify.app/collection/solar}
 */
import { icons as solarIcon } from '@iconify-json/solar'
import { Icon, addCollection } from '@iconify/vue'

addCollection(solarIcon)

export default Icon
