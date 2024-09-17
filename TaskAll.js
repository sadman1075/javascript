function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0) {
        return ("Invalid Input");

    }

    let expenses_difference = income - expenses;
    let tax = expenses_difference * 0.20;
    return tax;

}

function sendNotification(email) {

    if (!email.includes('@')) {
        return "Invalid Email";
    }

    let totalEmail = email.split('@');
    let username = totalEmail[0];
    let domain = totalEmail[1];

    return `${username} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return ("Invalid Input")
    }
    const Digit = /\d/.test(name);
    return Digit;
}

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return ("Invalid Input")
    }

    const required = ['name', 'testScore', 'schoolGrade', 'isFFamily'];
    for (let field of required) {
        if (!(field in obj)) {
            return "Invalid Input";
        }
    }


    if (typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    if (obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
    }


    let profession = 0;
    if (obj.isFFamily) {
        profession = 20;
    }
    const finalScore = obj.testScore + obj.schoolGrade + profession;
    return finalScore >= 80;

}

function  waitingTime(waitingTimes  , serialNumber) {

    if((typeof serialNumber!="number") || (!Array.isArray(waitingTimes)))
    {
        return "Invalid Input"
    }

    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let remainingPeople = serialNumber - waitingTimes.length - 1;
        return averageTime * remainingPeople;
}




