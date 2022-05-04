const {haversineGreatCircleDistance} = require('../functions.js');

function haversineTest() {
    if (haversineGreatCircleDistance(46.187687,6.143453,46.2059684,6.0987860) == 3,99) {
        console.log("passed");
    }
    else {
        console.log("didn't pass");
    }
}

// Run tests
haversineTest();