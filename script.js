function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let key in obj) {
    while (num >= obj[key][1]) {
      result += obj[key][0];
      num -= obj[key][1];
    }

    if (key % 2 === 0 && num >= obj[key][1] - obj[key + 2][1]) {
      result += obj[key + 2][0] + obj[key][0];
      num -= obj[key][1] - obj[key + 2][1];
    } else if (key % 2 !== 0 && num >= obj[key][1] - obj[key + 1][1]) {
      result += obj[key + 1][0] + obj[key][0];
      num -= obj[key][1] - obj[key + 1][1];
    }
  }

  return result;
}

console.log(convertToRoman(36)); // Output: XXXVI


// do not edit below this line
module.exports = convertToRoman
