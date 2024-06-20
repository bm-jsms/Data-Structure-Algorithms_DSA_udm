const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes storage

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)
strings.unshift('y', 'z'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings); // [ 'y', 'z', 'alien', 'x', 'a', 'b', 'c' ]
