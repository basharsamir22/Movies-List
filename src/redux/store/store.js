import { createStore,applyMiddleware } from "redux";
import { AllMOVIES } from "../types/mpviesType";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
export const storeCounter = createStore(moviesReducer,applyMiddleware(thunk))
