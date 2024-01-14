import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value <= 20000) {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            })
        }
    }
    console.log(expenses);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" min="1" max="20000" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};
export default Budget;
