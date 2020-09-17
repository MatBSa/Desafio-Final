import React, { useState } from 'react'

export default function MaintenanceScreen({ transaction }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('-');

  useEffect(() => {
    if (!transaction) {
      return;
    }
    const { description, value, category, yearMonthDay, type } = transaction;

    setDescription(description);
    setValue(value);
    setDate(yearMonthDay);
    setCategory(category);
    setType(type);
  }, [transaction]);

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value.trim();
    setDescription(newDescription);
  }

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  }

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value.trim();
    setCategory(newCategory);
  }

  return (
    <div>
      <div className="input-field">
        <input
          id='inputDescription'
          value={description}
          onChange={handleDescriptionChange}
          type="text"
        />
        <label htmlFor="inputDescription" className='active'>Descrição:</label>
      </div>

      <div className="input-field">
        <input
          id='inputValue'
          value={value}
          onChange={handleValueChange}
          type="number"
        />
        <label htmlFor="inputValue" className='active'>Valor:</label>
      </div>

      <div className="input-field">
        <input
          id='inputCategory'
          value={category}
          onChange={handleCategoryChange}
          type="text"
        />
        <label htmlFor="inputCategory" className='active'>Categoria:</label>
      </div>
    </div>
  )
}
