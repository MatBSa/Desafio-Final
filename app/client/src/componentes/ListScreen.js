import React from 'react'

const EARNING_COLOR = '##27ae60';
const EXPENSE_COLOR = '#c0392b';


export default function ListScreen({ transactions, periods, onFilterChange, onDeleteTransaction, onPeriodChange, filteredText }) {
  const { transactionStyle, buttonsStyle } = styles;

  return (
    <>
      <select
        className="browser-default" value={currentPeriod} onChange={onPeriodChange}
      >
        {periods.map(period => {
          return <option key={period}>{period}</option>;
        })}
      </select>

      <input type="text" placeholder='Filtro...'
        value={filteredText}
        onChange={onFilterChange}
      />

      {transactions.map((transaction) => {
        const currentColor = transaction.type === '+' ? EARNING_COLOR : EXPENSE_COLOR;
        return (
          <div
            key={transaction._id}
            style={{ ...transactionStyle, backgroudColor: currentColor }}
          >

            <span style={buttonsStyle}>
              <button className='waves-effect waves-light btn'>Editar</button>

              <button
                className='waves-effect waves-light btn red darken=4'
                onClick={onDeleteTransaction}
                id={transaction._id}
              >
                X
                    </button>
            </span>

            <span>
              {transaction.yearMonthDay} -{' '}
              <strong>{transaction.category}</strong> -{' '}
              {transaction.description} - {transaction.value}
            </span>
          </div>
        );
      })}
    </>
  )
}


const styles = {
  transactionStyle: {
    padding: '5px',
    margin: '5px',
    border: '1px solid lightgray',
    borderRadius: '5px',
  }
}, buttonsStyle: {
  margin: '10px'
};