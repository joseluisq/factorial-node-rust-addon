const assert = require('chai').assert
const addon = require('../lib')

describe('factorial built in Rust', function () {
    it('5 factorial', function () {
        assert.equal(addon.nativeFactorial(5), 120)
    })
})

describe('factorial built in Node', function () {
    it('5 factorial', function () {
        assert.equal(addon.nodeFactorial(5), 120)
    })
})
