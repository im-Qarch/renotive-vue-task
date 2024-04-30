/**
 * a simple solution for choose theme based on browser ans selection
 * @link [Doc](https://vueuse.org/core/useDark/)
 */

// ?these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
