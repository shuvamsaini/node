const lodash = require('lodash');
const items = [1,[2,[3,[4]]]];
const flatArray = lodash.flattenDeep(items);
console.log(flatArray);