function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0) {
        return ("Invalid Input");

    }

    let expenses_difference = income - expenses;
    let tax = expenses_difference * 0.20;
    return tax;

}

const final_result = calculateTax(7000, 7000)
console.log(final_result)

