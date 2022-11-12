import './ExpenseItem.css';

function ExpenseItem() {
	const expenseDate = new Date(2022, 11, 12);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 397.45;

	return (
		<div className="expense-item">
			
			{/* Function Date is an object not a string, 
			so it had to be strigify by method".toISOString*/}

			<div>{expenseDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h3>{expenseTitle}</h3>
                <div className='expense-item__price'>{expenseAmount}</div>
			</div>
		</div> 
	);
}

export default ExpenseItem;