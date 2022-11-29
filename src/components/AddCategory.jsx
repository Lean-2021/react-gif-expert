import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange =(e)=>{
    const {value} = e.target;
    setInputValue(value);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    if (inputValue.trim().length<=1)return;
    onNewCategory(inputValue.trim());
    // setCategories((cat)=>[...cat,inputValue]);
    setInputValue('');
    // console.log(inputValue);
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs..."
            value={ inputValue }
            onChange={onInputChange} 
        />
    </form>
  );
};
