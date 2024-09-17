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

const final_result = calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })
console.log(final_result)

