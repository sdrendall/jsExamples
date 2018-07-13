const steeve = {
  name: 'steeve'
}

const susan = steeve
susan.name = 'susan'

console.log(`heres susan!!`)
console.log(susan)
console.log('and heres steeve')
console.log(steeve)

console.log()
console.log('it doesnt have to be like this')
console.log()

const jacob = {
  name: 'jacob',
  hairColor: 'brown'
}

const sam = { ...jacob }
sam.name = 'sam'

console.log('heres sam:')
console.log(sam)
console.log('and heres jacob:')
console.log(jacob)
console.log()
console.log()

const jeremy = {
  ...jacob,
  name: 'jeremy'
}

/// it works with arrays too
A = [1, 2, 3, 4, 5, 6, 7]
B = [ ...A ]
B[3] = '💃';

console.log('array example')
console.log(A)
console.log(B)
