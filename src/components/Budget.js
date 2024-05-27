
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;

        const totalExpense = expenses.reduce( (total, item) => ( total += item.cost), 0);

        if(newBudget < totalExpense) alert(`The budget should not be lower than expense`);;

        if(newBudget > 20000) alert(`The budget should not exceed ${currency} 20000`);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input 
    type="number" 
    step="10" 
    value={budget} 
    onChange={handleBudgetChange}
    ></input>
</div>
    );
};
export default Budget;