function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}

function distanceFromHqInFeet(street) {
    const blockInFeet = 264;
    const hqStreet = 42;
    const distanceInBlocks = Math.abs(street - hqStreet);
    return distanceInBlocks * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * blockInFeet;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}


console.log("distanceFromHqInBlocks(50):", distanceFromHqInBlocks(50)); 
console.log("distanceFromHqInFeet(50):", distanceFromHqInFeet(50));
console.log("distanceTravelledInFeet(34, 50):", distanceTravelledInFeet(34, 50)); 
console.log("calculatesFarePrice(34, 50):", calculatesFarePrice(34, 50)); 
console.log("calculatesFarePrice(34, 5000):", calculatesFarePrice(34, 5000));
