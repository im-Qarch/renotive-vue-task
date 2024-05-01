/**
 * All of this constants names stetted based on backend api responses or client global enums.
 * it's important to updated const after any changes in api has side affect here.
 * ?i know that you know but it is what it is :).
 */

// !We make all routes names constant so we can smoothly change every time we want the naming without changes in the code
export const ROUTES_NAME: Record<string, string> = {
  DEFAULT: 'default',
  PRODUCT_LIST: 'product-list',
  SHOPPING_CART: 'shopping-cart',
  NOTFOUND: 'not-found',
}

export const ALL_LANGUAGES: Record<string, string>[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
]
