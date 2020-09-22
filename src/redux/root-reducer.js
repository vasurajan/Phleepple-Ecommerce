import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// we have to define a new persist config.
const persistConfig = {
  // our key is root essentially meaning at what point inside of our reducer object do we want to start storing everything--
  //and we want to start from the root
  key: 'root',
  // then we want to pass storage in as storage.
  storage,
  // this property is an array containing the string names of any of the reducer that we want to store.
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// it's a modified version of our route reducer except now with persistence capabilities.
export default persistReducer(persistConfig, rootReducer);
