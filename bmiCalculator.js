/**
 * Calculates Body Mass Index (BMI) and returns a health message.
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in meters
 * @returns {string} BMI message
 */
function calculateBMI(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    throw new Error("Invalid input: weight and height must be numbers.");
  }

  const bmi = weight / Math.pow(height, 2);
  const roundedBMI = Math.round(bmi);

  if (bmi < 18.5) {
    return `Your BMI is ${roundedBMI}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Your BMI is ${roundedBMI}, so you have a normal weight.`;
  } else {
    return `Your BMI is ${roundedBMI}, so you are overweight.`;
  }
}

// Example usage (for testing in Node.js terminal)
try {
  const result = calculateBMI(70, 1.75);
  console.log(result);
} catch (error) {
  console.error(error.message);
}