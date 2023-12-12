function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );

// ? Your mission is to rewrite the above function using Promises.

function fiveHeads() {
    return new Promise((resolve, reject) => {
        function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
        }

        let headsCount = 0;
        let attempts = 0;

        function fiveHeadsSync() {
            while (headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);

                if (result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }

                if (attempts >= 100) {
                    reject("Exceeded 100 attempts without getting five consecutive heads.");
                }

                if (headsCount === 5) {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                }
            }
        }

        fiveHeadsSync();
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("When does this run now?");