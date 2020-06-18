/*
 * @Author: your name
 * @Date: 2020-06-18 17:55:36
 * @LastEditTime: 2020-06-18 17:55:47
 * @LastEditors: your name
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
