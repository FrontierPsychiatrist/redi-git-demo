let name
if (process.argv.length > 1) {
  name = process.argv[2].toUpperCase()
} else {
  name = 'universe'
}

console.log(`Hello, ${name}!`)