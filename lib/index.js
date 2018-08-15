var addon = require('../native')

function factorial(n) {
	return n > 1 ? n * factorial(n - 1) : 1;
}

// function factorial (n) {
//	var total = 1

// 	for (i = 1; i <= n; i++) {
//		total = total * i
//  }

//	return total
// }

module.exports = {
    nodeFactorial: factorial,
    nativeFactorial: addon.factorial
}
