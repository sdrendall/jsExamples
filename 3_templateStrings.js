// concatenating lots of strings can be confusing to read sometimes
//

const service_name = 'meatballs'
const default_port = 9000

// from pal-api:
const hostSlug = service_name + "_PORT_" + default_port + "_" + "TCP_ADDR"

// new version
const hostSlug2 = `${service_name}_PORT_${default_port}_TCP_ADDR`

const multiLineString = `
  To whom it may concern,
   I hereby declare
   that
   I need my dphl package immediately!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
`

console.log(hostSlug)
console.log(hostSlug2)
console.log(multiLineString)
