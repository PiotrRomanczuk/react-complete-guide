import './ExpenseItem.css';

function ExpenseItem(props) {

	// Commenting a hard-coded data to send a props from an App.js file.

	// const expenseDate = new Date(2022, 11, 12);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 397.45;

	return (
		<div className="expense-item">
			
			{/* Function Date is an object not a string, 
			so it had to be strigify by method".toISOString()*/}

			<div>{props.date.toISOString()}</div>
			<div className='expense-item__description'>
				<h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>
			</div>
		</div> 
	);
}

export default ExpenseItem;