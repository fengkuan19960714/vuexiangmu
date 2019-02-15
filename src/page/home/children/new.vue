<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newlist" :key="index">
					<router-link :to="'/home/new/info/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
                            <div class="niubi">
                              <span>时间: {{item.add_time | capitalize}}</span>
							<span>点击:{{item.click}}</span>
                            </div>
						</div>
					</router-link>
				</li>
        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'

import moment from 'moment'

export default {
    data(){
        return{
            newlist:[]
        }
    },
     created(){
        this.getList()
    },
    methods:{
        getList(){
            this.$http.get("api/getnewslist").then(result=>{
                console.log(result.body)
                if(result.body.status===0){
                    Toast("数据获取成功")
                    this.newlist=result.body.message
                }else{
                    Toast("数据获取失败")
                }
            })
        }
    },
     filters:{
       capitalize:function(){
           return moment().format("YYYY-MM-DD HH:mm:ss");
        }
    }
}
</script>
<style lang="less">
    .niubi{
        display: flex;
        font-size: 12px;
        justify-content: space-between; 
        span{
        color: skyblue
        }
     
    }
       h4{
            font-size: 14px
        }
</style>