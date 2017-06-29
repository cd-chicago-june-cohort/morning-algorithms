function randNum() {
    var rand = Math.ceil(Math.random() * 20);
    return rand;
}

function roll() {
    var rolls = [];
    rolls[0] = randNum();
    rolls[1] = randNum();
    for (var i = 1; rolls[i] !== rolls[i-1]; i++) {
        rolls.push(randNum());
    }
    return rolls;
}

function results(rolls) {
    var max = 0;
    var min = 20;
    var sum = 0;
    for (var j = 0; j < rolls.length; j++) {
        if (rolls[j] > max) {
            max = rolls[j];
        }
        if (rolls[j] < min) {
            min = rolls[j];
        }
        sum +=  rolls[j];
    }
    var avg = sum/rolls.length;
    console.log(rolls);
    console.log("Number of rolls:", rolls.length, "Max:", max, "Min:", min, "Average:", avg);
}

results(roll());