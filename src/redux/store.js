import { createStore, applyMiddleware } from 'redux';

// persistStore => It allows our borowser to cache our store now
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// It calls our persistStore passing in our store--
//this persistor is essentially a persisted version of our store--
// and using this and our store is how we will actually create our new provider that's wrapping our application.
export const persistor = persistStore(store);

// export default { store, persistor }