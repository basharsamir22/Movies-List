import { AllMOVIES } from "../types/mpviesType";
const initalValue = {movies:[],pageCount:0}
export  const moviesReducer= (state=initalValue,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case AllMOVIES:
            return { movies : action.data,pageCount:action.pages}
        default:
            return state;
    }
} 