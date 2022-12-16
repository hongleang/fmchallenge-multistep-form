import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './features/forms/infoReducer';
import selectionReducer from './features/forms/plansSelectionReducer'
import addOnsSelectionReducer from './features/forms/addsOnReducer'

export default configureStore({
  reducer: {
    info: infoReducer,
    plans: selectionReducer,
    addOns: addOnsSelectionReducer
  }
})