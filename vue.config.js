// vue.config.js
module.exports = {
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '古绛供电所综合监控中心'
                return args;
            })
    }
}