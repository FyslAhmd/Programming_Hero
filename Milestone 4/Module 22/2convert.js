function inchToFeet(inch) {
    const feet = parseInt(inch / 12);
    const inches = inch % 12;
    console.log(`${feet} feet and ${inches} inch`);
}

inchToFeet(75);
