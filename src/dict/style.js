/*
 * @Author: your prop
 * @Date: 2020-07-10 22:19:36
 * @LastEditTime: 2020-07-18 01:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\dict\style.js
 */
export default {
  styles: [
    {
      prop: 'background-image',
      desc: '背景图片',
      type: 'String',
      default: ''
    },
    {
      prop: 'background-size',
      desc: '背景尺寸',
      type: 'String',
      default: ''
    },
    {
      prop: 'background-origin',
      desc: '背景定位',
      type: 'String',
      default: '',
      list: [
        {
          label: 'padding-box',
          value: 'padding-box'
        },
        {
          label: 'border-box',
          value: 'border-box'
        },
        {
          label: 'content-box',
          value: 'content-box'
        }
      ]
    },
    {
      prop: 'background-clip',
      desc: '背景剪裁',
      type: 'String',
      default: '',
      list: [
        {
          label: 'padding-box',
          value: 'padding-box'
        },
        {
          label: 'border-box',
          value: 'border-box'
        },
        {
          label: 'content-box',
          value: 'content-box'
        }
      ]
    },
    {
      prop: 'background-repeat',
      desc: '背景覆盖',
      type: 'String',
      default: '',
      list: [
        {
          label: 'no-repeat',
          value: 'no-repeat'
        },
        {
          label: 'repeat',
          value: 'repeat'
        },
        {
          label: 'repeat-x',
          value: 'repeat-x'
        },
        {
          label: 'repeat-y',
          value: 'repeat-y'
        }
      ]
    },
    {
      prop: 'background-position',
      desc: '背景定位',
      type: 'String',
      default: '',
      list: [
        {
          label: 'left top',
          value: 'left top'
        },
        {
          label: 'left center',
          value: 'left center'
        },
        {
          label: 'left bottom',
          value: 'left bottom'
        },
        {
          label: 'right top',
          value: 'right top'
        },
        {
          label: 'right center',
          value: 'right center'
        },
        {
          label: 'right bottom',
          value: 'right bottom'
        },
        {
          label: 'center top',
          value: 'center top'
        },
        {
          label: 'center center',
          value: 'center center'
        },
        {
          label: 'center bottom',
          value: 'center bottom'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'text-decoration',
      desc: '文本修饰',
      type: 'String',
      default: '',
      list: [
        {
          label: 'none',
          value: 'none'
        },
        {
          label: 'overline',
          value: 'overline'
        },
        {
          label: 'line-through',
          value: 'line-through'
        },
        {
          label: 'underline',
          value: 'underline'
        }
      ]
    },
    {
      prop: 'text-indent',
      desc: '文本缩进',
      type: 'String',
      default: ''
    },
    {
      prop: 'direction',
      desc: '文本方向',
      type: 'String',
      default: '',
      list: [
        {
          label: 'ltr',
          value: 'ltr'
        },
        {
          label: 'rtl',
          value: 'rtl'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'letter-spacing',
      desc: '字符间距',
      type: 'String',
      default: ''
    },
    {
      prop: 'text-shadow',
      desc: '文本阴影',
      type: 'String',
      default: ''
    },
    {
      prop: 'box-shadow',
      desc: '盒子阴影',
      type: 'String',
      default: ''
    },
    {
      prop: 'word-wrap',
      desc: '文本换行',
      type: 'String',
      default: '',
      list: [
        {
          label: 'break-word',
          value: 'break-word'
        },
        {
          label: 'normal',
          value: 'normal'
        }
      ]
    },
    {
      prop: 'word-break',
      desc: '单词拆分换行',
      type: 'String',
      default: '',
      list: [
        {
          label: 'break-all',
          value: 'break-all'
        },
        {
          label: 'normal',
          value: 'normal'
        },
        {
          label: 'keep-all',
          value: 'keep-all'
        }
      ]
    },
    {
      prop: 'white-space',
      desc: '空白的处理方式',
      type: 'String',
      default: '',
      list: [
        {
          label: 'normal',
          value: 'normal'
        },
        {
          label: 'pre',
          value: 'pre'
        },
        {
          label: 'nowrap',
          value: 'nowrap'
        },
        {
          label: 'pre-wrap',
          value: 'pre-wrap'
        },
        {
          label: 'pre-line',
          value: 'pre-line'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'font-style',
      desc: '字体样式',
      type: 'String',
      default: '',
      list: [
        {
          label: 'normal',
          value: 'normal'
        },
        {
          label: 'italic',
          value: 'italic'
        },
        {
          label: 'oblique',
          value: 'oblique'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'border',
      desc: '边框',
      type: 'String',
      default: ''
    },
    // {
    //   prop: 'border-top',
    //   desc: '边框上',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'border-right',
    //   desc: '边框右',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'border-bottom',
    //   desc: '边框下',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'border-left',
    //   desc: '边框左',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'margin',
    //   desc: '外边距',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'margin-left',
    //   desc: '外边距左',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'margin-right',
    //   desc: '外边距右',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'margin-top',
    //   desc: '外边距上',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'margin-bottom',
    //   desc: '外边距下',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'padding',
    //   desc: '内边距',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'padding-left',
    //   desc: '内边距left',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'padding-right',
    //   desc: '内边距right',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'padding-top',
    //   desc: '内边距top',
    //   type: 'String',
    //   default: ''
    // },
    // {
    //   prop: 'padding-bottom',
    //   desc: '内边距bottom',
    //   type: 'String',
    //   default: ''
    // },
    {
      prop: 'max-height',
      desc: 'max高度',
      type: 'String',
      default: ''
    },
    {
      prop: 'min-height',
      desc: 'min高度',
      type: 'String',
      default: ''
    },
    {
      prop: 'max-width',
      desc: 'max宽度',
      type: 'String',
      default: ''
    },
    {
      prop: 'min-width',
      desc: 'min宽度',
      type: 'String',
      default: ''
    },
    {
      prop: 'position',
      desc: '定位',
      type: 'String',
      default: '',
      list: [
        {
          label: 'static',
          value: 'static'
        },
        {
          label: 'relative',
          value: 'relative'
        },
        {
          label: 'fixed',
          value: 'fixed'
        },
        {
          label: 'absolute',
          value: 'absolute'
        },
        {
          label: 'sticky',
          value: 'sticky'
        }
      ]
    },
    {
      prop: 'left',
      desc: 'left',
      type: 'String',
      default: ''
    },
    {
      prop: 'top',
      desc: 'top',
      type: 'String',
      default: ''
    },
    {
      prop: 'right',
      desc: 'right',
      type: 'String',
      default: ''
    },
    {
      prop: 'bottom',
      desc: 'bottom',
      type: 'String',
      default: ''
    },
    {
      prop: 'overflow',
      desc: 'overflow',
      type: 'String',
      default: '',
      list: [
        {
          label: 'visible',
          value: 'visible'
        },
        {
          label: 'hidden',
          value: 'hidden'
        },
        {
          label: 'scroll',
          value: 'scroll'
        },
        {
          label: 'auto',
          value: 'auto'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'float',
      desc: 'float',
      type: 'String',
      default: '',
      list: [
        {
          label: 'left',
          value: 'left'
        },
        {
          label: 'right',
          value: 'right'
        }
      ]
    },
    {
      prop: 'transform',
      desc: 'transform',
      type: 'String',
      default: '',
      list: [
        {
          label: 'rotate(30deg)',
          value: 'rotate(30deg)'
        },
        {
          label: 'translate(50px,100px)',
          value: 'translate(50px,100px)'
        },
        {
          label: 'rotate(30deg)',
          value: 'rotate(30deg)'
        },
        {
          label: 'scale(2,3)',
          value: 'scale(2,3)'
        },
        {
          label: 'skew(30deg,20deg)',
          value: 'skew(30deg,20deg)'
        },
        {
          label: 'matrix(0.866,0.5,-0.5,0.866,0,0)',
          value: 'matrix(0.866,0.5,-0.5,0.866,0,0)'
        }
      ]
    },
    {
      prop: 'transform-origin',
      desc: 'transform-origin',
      type: 'String',
      default: ''
    },
    {
      prop: 'transition',
      desc: 'transition',
      type: 'String',
      default: '',
      list: [
        {
          label: 'width 1s linear 2s',
          value: 'width 1s linear 2s'
        }
      ]
    },
    {
      prop: 'box-sizing',
      desc: 'box-sizing',
      type: 'String',
      default: '',
      list: [
        {
          label: 'border-box',
          value: 'border-box'
        },
        {
          label: 'content-box',
          value: 'content-box'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    }
  ],
  oftenStyles: [
    {
      prop: 'display',
      desc: '元素',
      type: 'String',
      default: '',
      list: [
        {
          label: 'block',
          value: 'block'
        },
        {
          label: 'inline-block',
          value: 'inline-block'
        },
        {
          label: 'inline',
          value: 'inline'
        },
        {
          label: 'inherit',
          value: 'inherit'
        },
        {
          label: 'flex',
          value: 'flex'
        }
      ]
    },
    {
      prop: 'justify-content',
      desc: '左右对齐方式，设置了flex才生效',
      type: 'String',
      default: '',
      list: [
        {
          label: 'flex-start',
          value: 'flex-start'
        },
        {
          label: 'flex-end',
          value: 'flex-end'
        },
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'space-between',
          value: 'space-between'
        },
        {
          label: 'space-around',
          value: 'space-around'
        }
      ]
    },
    {
      prop: 'align-items',
      desc: '上下对齐方式，设置了flex才生效',
      type: 'String',
      default: '',
      list: [
        {
          label: 'flex-start',
          value: 'flex-start'
        },
        {
          label: 'flex-end',
          value: 'flex-end'
        },
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'baseline',
          value: 'baseline'
        },
        {
          label: 'stretch',
          value: 'stretch'
        }
      ]
    },
    {
      prop: 'flex',
      desc: 'flex',
      type: 'String',
      default: ''
    },
    {
      prop: 'height',
      desc: '高度',
      type: 'String',
      default: ''
    },
    {
      prop: 'width',
      desc: '宽度',
      type: 'String',
      default: ''
    },
    {
      prop: 'color',
      desc: '字体颜色',
      type: 'String',
      default: ''
    },
    {
      prop: 'background-color',
      desc: '背景颜色',
      type: 'String',
      default: ''
    },
    {
      prop: 'text-align',
      desc: '文本的对齐方式',
      type: 'String',
      default: '',
      list: [
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'right',
          value: 'right'
        },
        {
          label: 'left',
          value: 'left'
        },
        {
          label: 'justify',
          value: 'justify'
        }
      ]
    },
    {
      prop: 'line-height',
      desc: '行高',
      type: 'String',
      default: ''
    },
    {
      prop: 'vertical-align',
      desc: '垂直对齐',
      type: 'String',
      default: '',
      list: [
        {
          label: 'baseline',
          value: 'baseline'
        },
        {
          label: 'sub',
          value: 'sub'
        },
        {
          label: 'super',
          value: 'super'
        },
        {
          label: 'top',
          value: 'top'
        },
        {
          label: 'text-top',
          value: 'text-top'
        },
        {
          label: 'middle',
          value: 'middle'
        },
        {
          label: 'bottom',
          value: 'bottom'
        },
        {
          label: 'text-bottom',
          value: 'text-bottom'
        },
        {
          label: 'inherit',
          value: 'inherit'
        }
      ]
    },
    {
      prop: 'font-family',
      desc: '字体族名称',
      type: 'String',
      default: ''
    },
    {
      prop: 'font-size',
      desc: '字体大小',
      type: 'String',
      default: ''
    },
    {
      prop: 'font-weight',
      desc: '字体粗细',
      type: 'String',
      default: '',
      list: [
        {
          label: 'normal',
          value: 'normal'
        },
        {
          label: 'bold',
          value: 'bold'
        },
        {
          label: 'bolder',
          value: 'bolder'
        },
        {
          label: 'lighter',
          value: 'lighter'
        },
        {
          label: 'inherit',
          value: 'inherit'
        },
        {
          label: '100',
          value: '100'
        },
        {
          label: '200',
          value: '200'
        },
        {
          label: '300',
          value: '300'
        },
        {
          label: '400',
          value: '400'
        },
        {
          label: '500',
          value: '500'
        },
        {
          label: '600',
          value: '600'
        },
        {
          label: '700',
          value: '700'
        }
      ]
    },
    {
      prop: 'border-radius',
      desc: '圆角radius',
      type: 'String',
      default: ''
    }
  ]
}
