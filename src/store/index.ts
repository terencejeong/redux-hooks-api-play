import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(
  reducers,
  composeWithDevTools(
    // @ts-ignore
    middleware,
  )
)

export default store