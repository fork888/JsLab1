// Task 1

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input."
  }

  firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
  lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()

  return `${lastName}, ${firstName}`
}


// Task 2

function calculateTotalCost(price, quantity, taxRate) {
  if (
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate)
  ) {
    return "Invalid input."
  }

  return (price * quantity) * (1 + taxRate)
}


// Task 3

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Eligible for the program."
  }

  if (age > 18 && !isEmployed) {
    return "Conditionally eligible for the program."
  }

  return "Not eligible for the program."
}


// Task 4

function calculateTotalCostWithDiscount(
  price,
  quantity,
  taxRate,
  discount = 0
) {
  if (
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate) ||
    isNaN(discount)
  ) {
    return "Invalid input."
  }

  let subtotal = (price * quantity) - discount

  return subtotal * (1 + taxRate)
}


// Test Calls

console.log(formatFullName("colin", "jasper"))
console.log(calculateTotalCost(10, 5, 0.07))
console.log(checkEligibility(25, true))
console.log(calculateTotalCostWithDiscount(10, 5, 0.07, 5))