# megalo-aot
forked from kaola-fed/megalo-aot

支付宝小程序不支持循环引用，增加循环引用的支持。增加的代码是临时解决方案，会增加小程序包的大小，不建议微信小程序直接使用。支付宝小程序可以直接使用。

 "megalo-target-alipay": "0.0.1"

```
npm install --save-dev megalo-target-alipay
```

megalo.config.js 做如下调整即可

```
function createTarget () {
    const createMegaloTarget = require('megalo-target-alipay')
    const targetConfig = {
        compiler: Object.assign(require('@megalo/template-compiler'), {}),
        platform
    }
    return createMegaloTarget(targetConfig)
}


chainWebpack: chainConfig => {
    chainConfig.target(createTarget())
    // 你可以在这里通过 https://github.com/neutrinojs/webpack-chain 来精细的修改webpack配置
    // console.log('chainWebpack执行了', chainConfig.toString())
},
```
