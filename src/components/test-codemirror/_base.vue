<template>
  <div class="test-codemirror">
    <codemirror
      ref="code"
      v-if="init"
      class="codemirror"
      v-model="code"
      :options="cmOptions"
    ></codemirror>
  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

// theme css
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/monokai.css'

// 语言
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/go/go'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/http/http'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/xml/xml'

// 快捷键
import 'codemirror/keymap/sublime.js'

// 自动补全使用需要引入工具
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/xml-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/css-hint'

import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/foldgutter.css'

// closebrackets
import 'codemirror/addon/edit/closebrackets.js'
// keyMap
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/emacs.js'

// codemirror文档参考地址 https://blog.csdn.net/jlu_lei/article/details/80259697
export default {
  name: 'CommonTestCodemirror',
  data() {
    // let Theme = [ 'Base16-Light', 'Monokai', 'Base16-Dark', 'Paraiso-Light', 'Ambiance', 'Cobalt', 'Paraiso-Dark', 'Rubyblue', 'Mbo', 'Hopscotch', 'Solarized Light', 'Solarized Light', 'Lesser-Dark'];
    // let  Mode = [ 'Text/X-Vue', 'Text/Javascript', 'Text/Css, 'Text/Html', 'Application/X-Httpd-Php', 'Text/X-Python', 'Text/Apl', 'Text/X-Swift', 'Text/X-Go', 'Text/X-Lua', 'Text/X-Mysql', 'Mymode', 'Text/X-Markdown'];
    return {
      init: false,
      cmOptions: {
        // codemirror options
        mode: 'text/x-python', // 设置编译器编程语言关联内容，对应的mine值
        theme: 'base16-light', // 编译器的主题，需要引入对应的包  base16-light  monokai
        tabSize: 2, // tab的空格宽度
        lineNumbers: true, // 是否使用行号
        smartIndent: true, // 自动缩进是否开启
        indentUnit: 2, // 缩进单位
        line: true,
        styleActiveLine: true, // 设置光标所在行高亮true/false，需引入工具包：
        scrollbarStyle: 'simple', // 设置滚动条,默认为"null"为不显示的滚动条，可以使用提供的其他滚动条：“simple”,"overlay"选择内侧与外侧的滚动条
        readOnly: false, // 设置为只读true/false;也可设置为"nocursor"失去焦点
        autofocus: false, // 初始时是否自动获取焦点boolean
        keyMap: 'sublime', // emacs
        lineWrapping: true,
        foldgutter: true,
        extraKeys: { Tab: 'autocomplete' },
        ...this.options
      },
      code: ''
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    value: {
      default: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.init = true
    }, 0) // 解决点击才能显示codemirror的问题
  },
  methods: {},
  components: {
    codemirror
  },
  watch: {
    code(newVal) {
      this.$emit('input', newVal)
    },
    value: {
      handler(newVal) {
        this.code = newVal
      },
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .CodeMirror-scroll {
  background: #f4f5f6;
}
/deep/ .CodeMirror-gutters {
  background: #fff;
  border: none;
}
/deep/ .CodeMirror-sizer {
  margin-left: 40px;
}
/deep/ .CodeMirror pre {
  padding-left: 20px;
}
/deep/ .CodeMirror-linenumber {
  text-align: left;
}
</style>
