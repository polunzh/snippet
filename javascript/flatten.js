/**
 * 将多维数组展开为一位数组
 * @param {array} arr 多维数组
 */
function flatten (arr)  {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([[1, [3, 4], 2], 3]));
