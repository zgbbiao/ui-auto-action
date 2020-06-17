/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 19:10:00
 * @LastEditTime: 2020-06-08 18:12:03
 * @LastEditors: Please set LastEditors
 */
// "useTabs": false,
//
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const devServerPort = process.env.VUE_APP_DEV_SERVER_PORT || 8090
const PAGE_PATH = path.resolve(__dirname, './src/pages')

// 根据启动的模式使用不同的
const template =
  process.env.VUE_APP_MODEL === 'local'
    ? 'public/dev.html'
    : 'public/index.html'

/**
 * 获取页面入口集合 for devServer
 */
function getPagesEntities(path) {
  const entities = {}
  glob.sync(path).forEach(function(entity) {
    const moduleName = entity.split('/').slice(-1)
    entities[moduleName] = entity
  })
  // eg: {
  //  apply_admin: './src/pages/admin_manage/index',
  //  test: './src/pages/test/index'
  // }
  return entities
}

const pages = getPagesEntities(`${PAGE_PATH}/*`)

/**
 * 路由规则 for devServer
 */
const rewrites = [
  {
    from: /^.*?(?<!(\.hot-update\.json))$/,
    to: `${process.env.VUE_APP_ROUTER_BASE}index.html`
  }
]

const multiPages = {}

for (const page in pages) {
  if (!Object.prototype.hasOwnProperty.call(pages, page)) {
    break
  }
  const configFile = `${PAGE_PATH}/${page}/config.js`
  const config = fs.existsSync(configFile) ? require(configFile) : {}
  multiPages[page] = Object.assign(
    {
      // page 的入口
      entry: `src/pages/${page}/main.ts`,
      // 模板来源
      template,
      // 在 dist/index.html 的输出
      filename: page === 'index' ? `${page}.html` : `${page}/index.html`,
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '权限中心',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', page]
    },
    config
  )
  // match: /page/*  or /page
  rewrites.unshift({
    from: new RegExp(
      process.env.VUE_APP_ROUTER_BASE +
        page +
        '/|^' +
        process.env.VUE_APP_ROUTER_BASE +
        page +
        '$'
    ),
    to: process.env.VUE_APP_ROUTER_BASE + page + '/index.html'
  })
}

/**
 * 获取全局scss依赖文件
 */
function getGlobalStyleResources(path) {
  const styles = []
  glob.sync(path).forEach(function(filePath) {
    const file = filePath.split('/src/assets').slice(-1)
    styles.push(`@import "~@/assets${file}";`)
  })
  return styles.join('')
}

const globalStyleResources = getGlobalStyleResources(
  path.resolve(__dirname, './src/assets/styles/**/_*.scss')
)

module.exports = {
  transpileDependencies: [],
  publicPath: process.env.VUE_APP_CDN_PATH,
  assetsDir: 'assets',
  // 生产模式生成sourcemap
  productionSourceMap: false,
  css: {
    sourceMap: process.env.VUE_APP_MODEL === 'local',
    loaderOptions: {
      sass: {
        // 注入全局的scss依赖，如var、mixins、functions等
        prependData: globalStyleResources
      }
    }
  },
  // 支持less全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/common/_var.less')]
    }
  },
  configureWebpack: {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    }
  },
  chainWebpack: config => {
    // 设置全局环境变量
    // config.plugin('define').tap(args => {
    //   args[0].GLOBAL_COMPONENTS = JSON.stringify(globalComponents)
    //   return args
    // })

    // alias注册
    config.resolve.alias
      .set('@_src', path.resolve(process.cwd(), 'src'))
      .set('@', path.resolve(process.cwd(), 'src'))
      .set('moment$', path.resolve(__dirname, 'node_modules/moment/moment.js'))
  },

  /**
   * 本地开发服务配置
   */
  devServer: {
    port: devServerPort,
    host: '0.0.0.0',
    contentBase: './dist',
    publicPath: process.env.VUE_APP_ROUTER_BASE,
    https: process.env.VUE_APP_PROTOCOL_HTTPS === 'true',
    compress: true,
    disableHostCheck: true,
    overlay: true,
    headers: {
      'X-Custom-Foo': 'bar',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type,' + ' Authorization'
    },
    historyApiFallback: {
      verbose: true,
      rewrites
    }
    // proxy: {
    // '/authority_dev': {
    //   target: 'http://127.0.0.1',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/authority_dev': '/authority_dev'
    //   }
    // }
    // '/authority_dev': {
    //   target: 'http://134.175.10.101',
    //   // target: 'http://10.9.122.90:8088',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/authority_dev': '/authority_dev'
    //   }
    // }
    // }
  },
  /**
   * 多页应用配置
   */
  pages: multiPages
}
