function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return ("Invalid Input")
    }
    const Digit = /\d/.test(name);
    return Digit;
}

const final_result = checkDigitsInName("Raj")
console.log(final_result)
