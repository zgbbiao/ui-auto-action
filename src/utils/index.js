/*
 * @Author: your name
 * @Date: 2020-06-18 17:55:36
 * @LastEditTime: 2020-07-07 01:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\utils\index.js
 */

/*
desc: 树结构扁平化
*/
export const flatten = (data, uiChildrenName = 'children') => {
  return data.reduce(
    (arr, obj) =>
      arr.concat(
        [{ ...obj }],
        flatten(obj[uiChildrenName] || [], uiChildrenName)
      ),
    []
  )
}

export const myconsole = function(val, name = '') {
  let consolecount = +(localStorage.getItem('consolecount') || 1)
  consolecount = consolecount + 1
  localStorage.setItem('consolecount', consolecount + '')
  const fixxname = name ? name : consolecount
  if (typeof val === 'object') {
    console.log(`${fixxname}---->`, JSON.parse(JSON.stringify(val)))
  } else {
    console.log(`${fixxname}----->`, val)
  }
}
