// Cách để import theo COMMONJS
const test1 = require('./showData.js');
// Cách để sử dụng sau khi import theo COMMONJS
const format = test1.formatPhoneNumber('2345678900');
console.log(format);