async function getName() {
  return 'gerald'
}

getName().then(console.log)

async function getNameThenAge() {
  const name = await getName()
  const age = 38
  return { name, age }
}

getNameThenAge().then(({ name, age }) => {
  console.log(`I got you ${name}!`)
  console.log(`${name} is ${age + 4} but tells everyone that they're ${age}`)
  console.log(`you can't fool me ${name} you sneak you~`)
})

// replaces this sorta thing::

function getNameBefore() {
  const name = 'anthony'
  return new Promise((resolve, reject) => {
    resolve(name)
  })
}

getNameBefore().then(console.log)
