const submitButton = document.querySelector(`form`);
const expenseInput = document.getElementById("input-name");
const dateInput = document.getElementById("input-date");
const amountInput = document.getElementById("input-amount");
const expenseList = document.getElementById("expense-list");
const expenseTable = document.querySelector("table");
let expenses = [];
let counter = 0;


const showExpenses = () => {
	for (let i = 0; i < expenses.length; i++) {
		const expense = expenses[i];
		expenseInput.value = "";
		dateInput.value = "";
		amountInput.value = "";
		expenseList.remove();
		expenseTable.innerHTML += `
        <tr>
        <th>${expense.name}</th>
        <th>${expense.date}</th>
                                <th>${expense.amount}</th>
                                <th> <button class="remove" id="remove${i}">X</button></th>
								</tr>
        `;
	}

	const removeElements = document.querySelectorAll(".remove");

	for (let i = 0; i < removeElements.length; i++) {
		const removeElement = removeElements[i];

		removeElement.addEventListener("click", (e) => {
			e.target.parentElement.parentElement.remove();
			expenses.splice(i, 1);
			counter--;
		});
	}
};

submitButton.addEventListener("submit", (e) => {
	e.preventDefault();
	if (expenseInput.value !== "" && dateInput.value !== "" && amountInput.value !== "") {
		expenses[counter] = {
			name: expenseInput.value,
			date: dateInput.value,
			amount: Number(amountInput.value),
		};
		counter++;
		expenseTable.innerHTML = `<tr>
		<th id="th-name">Name</th>
		<th id="th-date">Date</th>
		<th id="th-amount">Amount</th>
		<th>&nbsp;</th>
	</tr>`;
		showExpenses();
	}
});
