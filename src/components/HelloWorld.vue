<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-chart
            :options="barChartOption"
            :init-options="initOptions"
            ref="bar"
            theme="ovilia-green"
            autoresize />
  </div>
</template>

<script>
import qs from 'qs'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// custom theme
import theme from '../theme.json'

// registering custom theme
ECharts.registerTheme('ovilia-green', theme);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    return {
        initOptions: {
            renderer: options.renderer || 'canvas'
        },
        barChartOption: {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
