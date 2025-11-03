import { types } from "./types";

// Calculator actions
export function inputNumberAction(value){
    return {
        type: types.INPUT_NUMBER,
        payload: value
    }
}

export function addOperationAction(value){
    return {
        type: types.ADD_OPERATION,
        payload: value
    }
}

export function subtractOperationAction(value){
    return {
        type: types.SUBTRACT_OPERATION,
        payload: value
    }
}

export function multiplyOperationAction(value){
    return {
        type: types.MULTIPLY_OPERATION,
        payload: value
    }
}

export function divideOperationAction(value){
    return {
        type: types.DIVIDE_OPERATION,
        payload: value
    }
}

export function clearListAction(operation){
    return {
        type: types.CLEAR_LIST,
        operation: operation
    }
}

