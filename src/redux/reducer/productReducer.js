
import {ActionType} from "../constant/actionType"
const initialState={
    product:[{
        id:1,
        title:"Dipesh",
        category:"programmer"
       },
    ],
};

export const  productReducer=(state=initialState,action)=>{
    if(ActionType.SET_PRODUCT){
        return state;
    }
}