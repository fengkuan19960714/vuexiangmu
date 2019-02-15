import Vue from 'vue'
import App from './App'

// 引入清除默认样式css
import '@/css/common.css'

//引入mint-ui 分模块引入
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

//引入mui
import './css/mui/css/mui.min.css'

//引入mui-icons-extra
import './css/mui/css/icons-extra.css'

// 引入animate.css
import 'animate.css'

// 导入路由模块
import router from './router'

// 发送请求模块
import Vueresource from 'vue-resource'

Vue.use(Vueresource)

Vue.http.options.root = "http://www.lovegf.cn:8899"

// 轮播图模块
import { Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import moment from 'moment'

Vue.filter(
    "capitalize",
    function(dataStr) {
        return moment(dataStr).format("YYYY-MM-DD HH:mm:ss");
    })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})