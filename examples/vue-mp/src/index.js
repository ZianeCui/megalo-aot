import App from './App'
import Vue from 'vue'

const app = new Vue( App )

app.$mount()

export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

    pages: [
      'pages/counter/index',
      // 'pages/todomvc/index',
    ],

    subpackages: [
      {
        root: 'package',
        pages: [
          'pages/demo/index'
        ]
      }
    ]
  }
}
