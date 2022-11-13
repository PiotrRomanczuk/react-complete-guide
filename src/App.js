import ExpenseItem from './components/ExpenseItem';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New Tv',
			amount: 799.49,
			date: new Date(2022, 8, 1),
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 14),
		},
		{
			id: 'e4',
			title: 'New Desk',
			amount: 450,
			date: new Date(2022, 5, 12),
		},
	];

	return (
		<div className='App'>
			<h1>Let's get started!</h1>
			<ExpenseItem
				title={expenses[0].title}
				id={expenses[0].id}
				amount={expenses[0].amount}
        date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				id={expenses[1].id}
				amount={expenses[1].amount}
        date={expenses[1].date}
			></ExpenseItem>
      			<ExpenseItem
				title={expenses[2].title}
				id={expenses[2].id}
				amount={expenses[2].amount}
        date={expenses[2].date}
			></ExpenseItem></div>
	);
}

export default App;
