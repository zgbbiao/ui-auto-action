/*
 * @Author: your name
 * @Date: 2020-06-18 17:55:36
 * @LastEditTime: 2020-07-17 18:19:15
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

// 深度删除数组内某项值
export const deepRemoveItem = function(arr, callback, childrenName = 'tasks') {
  return arr.filter(item => {
    let isTrue = true
    if (callback) {
      isTrue = callback(item)
    }
    if (Array.isArray(item[childrenName])) {
      item[childrenName] = deepRemoveItem(item[childrenName])
    }
    return isTrue
  })
}

export const cssStyle2DomStyle = function(sName) {
  const arr = sName.split('-')
  const arr1 = arr.filter(item => item)
  const arr2 = arr1.map(function(val, i) {
    if (i > 0) {
      return val.replace(val[0], val[0].toUpperCase())
    } else {
      return val
    }
  })
  return arr2.join('')
}
