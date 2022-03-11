const weight = prompt("Enter the Weight in pounds:");
if (weight < 115) {
  console.log(
    "The weight category is FLYWEIGHT and the weight is",
    weight + "-lbs"
  );
} else if (weight >= 115 && weight <= 121) {
  console.log(
    "The weight category is BANTAMWEIGHT and the weight is",
    weight + "-lbs"
  );
} else if (weight >= 122 && weight <= 153) {
  console.log(
    "The weight category is FEATHERWEIGHT and the weight is",
    weight + "-lbs"
  );
} else if (weight >= 154 && weight <= 189) {
  console.log(
    "The weight category is MIDDLEWEIGHT and the weight is",
    weight + "-lbs"
  );
} else if (weight >= 190) {
  console.log(
    "The weight category is HEAVYWEIGHT and the weight is",
    weight + "-lbs"
  );
} else {
  console.log(
    weight,
    "is not a valid weight, Kindly enter a valid weight in -lbs"
  );
}
