console.log("main.js")

const penis = (n) => {
  let shaft = () => Array(n).fill().map(() => '=').join('')
  return `8${shaft()}D`
}

console.log(penis(4))
