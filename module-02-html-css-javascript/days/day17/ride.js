'use strict';

//  Part 1: Function Basics (Arrows, Defaults, Rest)

const sumDistances = (...distances) => {
    return distances.reduce((total, distance) => total + distance, 0);
};

const calculateBaseFare = (totalDistance, ratePerKm = 15) => {
    return totalDistance * ratePerKm;
};

const formatCurrency = (amount) => {
    return `${amount.toFixed(2)} ETB`;
};


// part 2: Higher-Order Functions (Factories)

function makeSurgeMultiplier(surgeRate) {
    return function(baseFare) {
        return baseFare * surgeRate;
    };
}


// part 3: Closures (Private State)

function makeDriverTracker() { 
    let tripsCompleted = 0;

    return {
        recordTrip() {
            tripsCompleted++;
        },

        getTrips() {
            return tripsCompleted;
        }
    };
}


//  part 4: Putting It All Together (Composition & Callbacks)

function generateReceipt(distances, surgeFn, tracker, callback) {
    // 1. Record the trip
    tracker.recordTrip();

    // 2. Sum the distances
    const totalDistance = sumDistances(...distances);

    // 3. Calculate base fare
    const baseFare = calculateBaseFare(totalDistance);

    // 4. Apply surge pricing
    const actualFare = surgeFn(baseFare);

    // 5. Format to ETB
    const formattedFare = formatCurrency(actualFare);

    // 6. Create message string
    const receipt = `Trip #${tracker.getTrips()}: Total Fare is ${formattedFare}.`;

    // 7. Invoke the callback with the message
    callback(receipt);
}


// TESTING YOUR CODE 

// 1. Setup our driver tracker and regular/rush hour pricing
const tayesTracker = makeDriverTracker();

const standardPricing = makeSurgeMultiplier(1.0);

const rushHourPricing = makeSurgeMultiplier(1.5);


// 2. A simple callback function for logging
const printToConsole = (message) => console.log(message);


// 3. Process Ride 1
generateReceipt(
    [2, 3],
    standardPricing, 
    tayesTracker,
    printToConsole
);


// 4. Process Ride 2
generateReceipt(
    [10], 
    rushHourPricing,
    tayesTracker,
    printToConsole
);