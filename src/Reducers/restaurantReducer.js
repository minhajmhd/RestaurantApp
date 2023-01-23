import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { R_FAILURE, R_SUCCESS } from "../constants/restaurantConstants";

export const restaurantListReducer=(state={restaurantList:[]},action)=>{
    switch (action.type) {
        case R_SUCCESS:
            return{
                restaurantList:action.payload
            }
        case R_FAILURE:
            return{
                restaurantList:AccordionItem.error
            }
    
        default:
            return state
    }
}