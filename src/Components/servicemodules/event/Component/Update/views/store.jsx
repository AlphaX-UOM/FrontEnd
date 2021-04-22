import { createStore } from 'redux'
import onlineStoreApp from './reducers'
export const store = createStore(onlineStoreApp)