var bitset = new Bitset(1000);
bitset = bitset.map(function(e, i, b) {
  return +(i&1);
});
bitset.count();
bitset.any();
bitset.reset(3);
bitset.set(4);
bitset.forEach(function(e, i, b) {
  console.log(e, i);
});
console.log(bitset.toString());
console.log(bitset.join('\n'));
console.log(bitset.toNumber());
console.log(bitset.length);
console.log(bitset.size());
bitset.reset();
console.log(bitset.toString());
bitset = bitset.map(function(e) {
  return e^1;
});
console.log(bitset.toString());
