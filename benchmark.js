const Benchmark = require('benchmark')
const addon = require('./lib')

const suite = new Benchmark.Suite()

suite
    .add('nodeFactorial (Node)', () => addon.nodeFactorial(5))
    .add('nativeFactorial (Rust)', () => addon.nativeFactorial(5))

    .on('cycle', (event) =>
        console.log(String(event.target)))
    .on('complete', () =>
        console.log('Fastest is ' + suite.filter('fastest').map('name')))
    .run({ async: true })