import { ADD_USERS_TRAVEL_INFO , UPDATE_USERS_TRAVEL_INFO} from "./action";

const initialState = {
    travelInfo: []
}

const travelReducer = (state=initialState, action) =>
{
    switch (action.type) {
        case UPDATE_USERS_TRAVEL_INFO:
            return {
                travelInfo:[action.travelInfo] 
             }
        default:
            return state;
    }
}

export default travelReducer;