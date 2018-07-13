// OBJECT DESTRUCTURING
const someResponse = {
  code: 200,
  data: {
    success: true,
    unpairedSocks: 7,
  }
}

function handleResponse(response) {
  const { code, data } = response
  if (code < 400 && data.success )  {
    console.log(`you have ${data.unpairedSocks} unpaired socks in your drawer`)
  }
}

function handleResponse2(response) {
  const {
    code,
    data: {
      success,
      unpairedSocks,
    }
  } = response

  // gives you variables for code, success and unpairedSocks BUT NOT data

  if (code < 400 && success )  {
    console.log(`you have ${unpairedSocks} unpaired socks in your drawer`)
  }
}

console.log('object destrutring!')
handleResponse(someResponse)
console.log('with more destructuring:')
handleResponse2(someResponse)
console.log()
console.log()
console.log()

// ARRAY DESTRUCTURING
const sortedFavoriteColors = ['green', 'blue', 'redishgreen', 'bluishyellow', 'chartruce']

function logFavoriteColors(favoriteColors) {
  const [ favoriteColor, secondFavoriteColor, ...rest ] = favoriteColors
  console.log(`my favorite color is ${favoriteColor}`)
  console.log(`my second favorite color is ${secondFavoriteColor}`)
  console.log('these are nice colors too:')
  console.log(rest)
}

console.log('array destructuring!')
logFavoriteColors(sortedFavoriteColors)
console.log()
console.log()
console.log()


// you can also do it in the function signature:
const myMeatball = {
  name: 'meatball',
  shape: 'sphere',
  madeOf: 'meat',
  safeToEatRaw: false,
  spicy: true,
}



function describeFoodItem({ name, spicy, ...otherInfo }) {
  console.log(`It's a${spicy ? ' spicy' : ''} ${name}`)
  console.log('some other important information:')
  console.log(otherInfo)
}

console.log('in the function signature!')
describeFoodItem(myMeatball, { a: 5 })
console.log()
console.log()
console.log()
