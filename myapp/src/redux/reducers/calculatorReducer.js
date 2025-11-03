import { types } from "../types";

const initialState = {
    inputValue: '',
    addList: [],
    subtractList: [],
    multiplyList: [],
    divideList: []
}

export default function calculatorReducer(state = initialState, action) {
    
    if (action.type === types.INPUT_NUMBER) {
        return {...state, inputValue: action.payload}
    }
    
    // Addition operation
    else if (action.type === types.ADD_OPERATION) {
        const newValue = parseFloat(action.payload);
        if (isNaN(newValue)) return state;
        
        if (state.addList.length === 0) {
            return {...state, addList: [newValue], inputValue: ''}
        } else {
            const lastValue = state.addList[state.addList.length - 1];
            const result = lastValue + newValue;
            return {...state, addList: [...state.addList, result], inputValue: ''}
        }
    }
    
    // Subtraction operation
    else if (action.type === types.SUBTRACT_OPERATION) {
        const newValue = parseFloat(action.payload);
        if (isNaN(newValue)) return state;
        
        if (state.subtractList.length === 0) {
            return {...state, subtractList: [newValue], inputValue: ''}
        } else {
            const lastValue = state.subtractList[state.subtractList.length - 1];
            const result = lastValue - newValue;
            return {...state, subtractList: [...state.subtractList, result], inputValue: ''}
        }
    }
    
    // Multiplication operation
    else if (action.type === types.MULTIPLY_OPERATION) {
        const newValue = parseFloat(action.payload);
        if (isNaN(newValue)) return state;
        
        if (state.multiplyList.length === 0) {
            return {...state, multiplyList: [newValue], inputValue: ''}
        } else {
            const lastValue = state.multiplyList[state.multiplyList.length - 1];
            const result = lastValue * newValue;
            return {...state, multiplyList: [...state.multiplyList, result], inputValue: ''}
        }
    }
    
    // Division operation
    else if (action.type === types.DIVIDE_OPERATION) {
        const newValue = parseFloat(action.payload);
        if (isNaN(newValue) || newValue === 0) return state;
        
        if (state.divideList.length === 0) {
            return {...state, divideList: [newValue], inputValue: ''}
        } else {
            const lastValue = state.divideList[state.divideList.length - 1];
            const result = lastValue / newValue;
            return {...state, divideList: [...state.divideList, result], inputValue: ''}
        }
    }
    
    // Clear lists
    else if (action.type === types.CLEAR_LIST) {
        // Determine which list to clear based on operation type
        if (action.operation === 'add') {
            return {...state, addList: []}
        } else if (action.operation === 'subtract') {
            return {...state, subtractList: []}
        } else if (action.operation === 'multiply') {
            return {...state, multiplyList: []}
        } else if (action.operation === 'divide') {
            return {...state, divideList: []}
        }
    }

    return state;
}

