
import {configureStore} from '@reduxjs/toolkit'

import {createLogger} from 'redux-logger'

import cakeReducer from '../feature/cake/cakeSlice'

import iceCreamReducer from '../feature/ice-cream/iceCreamSlice'
import userReducer from '../feature/users/userSlice'
const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => {
  //    return getDefaultMiddleware().concat(logger);
  //   },
});


  export default store;
