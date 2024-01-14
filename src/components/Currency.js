import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const dropdownStyles = {
        width: '50%',
        height: '70%',
        fontSize: 'px',
        color: 'white',
        backgroundColor: '#90EE90',
        fontWeight: '600',
    }

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }

    return (
        
            <select id="id-currency" style={dropdownStyles} value={selectedCurrency} defaultValue={"placeholder"} onChange={handleCurrencyChange}>
            <option disabled value="placeholder">Currency</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
        </select>
        
    );
};
export default Currency;
