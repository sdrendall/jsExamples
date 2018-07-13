function createSpicyMayo(gallons) {
  return {
    contents: 'spicy mayo',
    gallons: gallons,
  }
}

function createSpicyMayo2(gallons) {
  return {
    contents: 'spicy mayo',
    gallons // interpreted as gallons: gallons
  }
}

console.log('it works both ways!')
console.log(createSpicyMayo(4))
console.log(createSpicyMayo2(5))
