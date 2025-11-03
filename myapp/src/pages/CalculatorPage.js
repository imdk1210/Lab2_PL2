import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    inputNumberAction, 
    addOperationAction, 
    subtractOperationAction, 
    multiplyOperationAction, 
    divideOperationAction, 
    clearListAction 
} from "../redux/action";

function CalculatorPage() {
    const { inputValue, addList, subtractList, multiplyList, divideList } = useSelector(state => state.calculatorReducer);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch(inputNumberAction(event.target.value));
    }

    const handleAdd = () => {
        if (inputValue !== '') {
            dispatch(addOperationAction(inputValue));
        }
    }

    const handleSubtract = () => {
        if (inputValue !== '') {
            dispatch(subtractOperationAction(inputValue));
        }
    }

    const handleMultiply = () => {
        if (inputValue !== '') {
            dispatch(multiplyOperationAction(inputValue));
        }
    }

    const handleDivide = () => {
        if (inputValue !== '') {
            dispatch(divideOperationAction(inputValue));
        }
    }

    const handleClearAdd = () => {
        dispatch(clearListAction('add'));
    }

    const handleClearSubtract = () => {
        dispatch(clearListAction('subtract'));
    }

    const handleClearMultiply = () => {
        dispatch(clearListAction('multiply'));
    }

    const handleClearDivide = () => {
        dispatch(clearListAction('divide'));
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Calculator</h2>
            
            {/* Input field */}
            <input 
                type="number" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter a number"
                style={{ padding: '8px', marginBottom: '20px', width: '200px' }}
            />

            {/* Addition Section */}
            <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3>Addition (+)</h3>
                <button onClick={handleAdd} style={{ padding: '8px 15px', marginRight: '10px' }}>Add</button>
                <button onClick={handleClearAdd} style={{ padding: '8px 15px' }}>Clear</button>
                <div style={{ marginTop: '10px' }}>
                    {addList.length > 0 ? (
                        <ul>
                            {addList.map((value, idx) => <li key={idx}>{value}</li>)}
                        </ul>
                    ) : (
                        <p style={{ color: '#999' }}>List is empty</p>
                    )}
                </div>
            </div>

            {/* Subtraction Section */}
            <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3>Subtraction (-)</h3>
                <button onClick={handleSubtract} style={{ padding: '8px 15px', marginRight: '10px' }}>Add</button>
                <button onClick={handleClearSubtract} style={{ padding: '8px 15px' }}>Clear</button>
                <div style={{ marginTop: '10px' }}>
                    {subtractList.length > 0 ? (
                        <ul>
                            {subtractList.map((value, idx) => <li key={idx}>{value}</li>)}
                        </ul>
                    ) : (
                        <p style={{ color: '#999' }}>List is empty</p>
                    )}
                </div>
            </div>

            {/* Multiplication Section */}
            <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3>Multiplication (*)</h3>
                <button onClick={handleMultiply} style={{ padding: '8px 15px', marginRight: '10px' }}>Add</button>
                <button onClick={handleClearMultiply} style={{ padding: '8px 15px' }}>Clear</button>
                <div style={{ marginTop: '10px' }}>
                    {multiplyList.length > 0 ? (
                        <ul>
                            {multiplyList.map((value, idx) => <li key={idx}>{value}</li>)}
                        </ul>
                    ) : (
                        <p style={{ color: '#999' }}>List is empty</p>
                    )}
                </div>
            </div>

            {/* Division Section */}
            <div style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
                <h3>Division (/)</h3>
                <button onClick={handleDivide} style={{ padding: '8px 15px', marginRight: '10px' }}>Add</button>
                <button onClick={handleClearDivide} style={{ padding: '8px 15px' }}>Clear</button>
                <div style={{ marginTop: '10px' }}>
                    {divideList.length > 0 ? (
                        <ul>
                            {divideList.map((value, idx) => <li key={idx}>{value}</li>)}
                        </ul>
                    ) : (
                        <p style={{ color: '#999' }}>List is empty</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage;

