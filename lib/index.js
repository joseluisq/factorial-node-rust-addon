var addon = require('../native')

function factorial (n) {
    var total = 1

	for (i=1; i<=n; i++) {
    total = total * i
    }

	return total
}

module.exports = {
    nodeFactorial: factorial,
    nativeFactorial: addon.factorial
}
