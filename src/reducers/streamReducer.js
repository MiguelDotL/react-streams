/* eslint-disable import/no-anonymous-default-export */
import { mapKeys, omit } from "lodash";
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
        case FETCH_STREAM:
        case EDIT_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_STREAM:
            return omit(state, action.payload);
        case FETCH_STREAMS:
            return {
                ...state,
                ...mapKeys(action.payload, "id")
            };
        default:
            return state;
    }
};
