import { createPinia } from 'pinia'

/**
 * use pinia-plugin-store to persist our stored data in app
 * pinia by default do not handle this feature
 * @link [git repo](https://github.com/mioxs/pinia-plugin-store)
 */
import { storePlugin } from 'pinia-plugin-store'

/**
 * use crypto-js / js-cookie / nanoid to make
 * the highest security level for storing data in client side
 * !in this app no need to do this cause no authorized access exist
 * !but overall is good to implement the best situation for development
 */
import Crypto from 'crypto-js'
import Cookie from 'js-cookie'
import { nanoid } from 'nanoid'

// define our store and security keys
const store = createPinia()
const cookie_secret_key = import.meta.env.VITE_COOKIE_DOMAIN
const encryptionToken = Cookie.get(cookie_secret_key) || nanoid()
Cookie.set(cookie_secret_key, encryptionToken)

// init store with persist plugin
const plugin = storePlugin({
  stores: ['app'],
  storage: localStorage,
  encrypt: (value: string): string => {
    const store = Crypto.AES.encrypt(value, encryptionToken).toString()
    return store
  },
  decrypt: (store: string): string => {
    if (store) {
      try {
        const bytes = Crypto.AES.decrypt(store, encryptionToken)
        return bytes.toString(Crypto.enc.Utf8).toString()
      }
      catch (e) {
        return ''
      }
    }
    return ''
  },
})

store.use(plugin)

export default store
