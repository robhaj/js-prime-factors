var findFactor = function(num) {
  if (num <= 1) {return [];}
  var i = 2;
  while (num % i) {i++;}
  var factors = [];
  factors.push(i);
  var addtl = findFactor(num / i);
  if (addtl.length) {factors = factors.concat(addtl);}
  return factors;
};

module.exports = primeFactors = {
  for: findFactor
};
