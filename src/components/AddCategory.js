import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => setInputValue(e.target.value)

const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2)
    {
        console.log('Submit done');
        setCategories( cats => [inputValue, ...cats]);
        setInputValue('');
    }
   
}
  return (
    <div>
        {/* <h1>{inputValue}</h1> */}
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value = {inputValue}
            onChange = {handleInputChange}
        />

        </form>
        

    </div>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
