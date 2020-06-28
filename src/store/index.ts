import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './modules'

const initStore = () => {
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware())
  const store = createStore(rootReducer, enhancer)
  return store
}
export default initStore()
