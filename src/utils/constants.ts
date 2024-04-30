/**
 * All of this constants names stetted based on backend api responses or client global enums.
 * it's important to updated const after any changes in api has side affect here.
 * ?i know that you know but it is what it is :).
 */

export const LANGUAGE: Record<string, string> = {
  en: 'English',
  fa: 'Persian - فارسی',
}

export const ALL_LANGUAGES: Record<string, string>[] = [
  { value: 'en', label: 'English' },
  { value: 'fa', label: 'Persian - فارسی' },
]
