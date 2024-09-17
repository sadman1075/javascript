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

const final_result=waitingTime([7, 8, 3, 4, 5], "9")
console.log(final_result);
