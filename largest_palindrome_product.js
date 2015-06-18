/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
module.exports = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

for (var factor_0 = 1; factor_0 <= 10; factor_0++) {
	// console.log ("First Number " + factor_0);
	for (var factor_1 = 1; factor_1 <= 10; factor_1++) {
		// console.log("Second Number " + factor_1);
		// multiply both factors
		var product = factor_0 * factor_1;
		// console.log(product.toString());
		console.log(product.split('').reverse().join(''));
	}
}

function checkPalindrome(product){
	console.log(product.toString());
	// console.log(stringProduct.split('').reverse().join(''));
}
// 

 //  var arr = [];
 //  for (var factor_0 = 999; factor_0>100; factor_0--){
	// for (var factor_1 = 999; factor_1>100; factor_1--){
 //  		var mul = factor_1 * factor_0;
 //  		if (palindromeNumber(mul)){
 //  			arr.push(factor_1 * factor_0);
 //  		}
 //  	}
 //  }




  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};