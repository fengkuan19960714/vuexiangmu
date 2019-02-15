<template>
    <div class="infocontent">
        <!-- 头部 -->
        <h3>{{infodata.title}}</h3>
        <div class="infoclass">
            <span>时间:{{infodata.add_time | capitalize}}</span>
            <span>条数:{{infodata.click}}</span>
        </div>
        <hr>
        <!-- 主体内容 -->
        <div class="infoBodyContent" v-html="infodata.content"></div>

        <!-- 评论部分 -->
        <infocomment v-bind:songdata="id"></infocomment>
        
    </div>
</template>
<script>
import infocomment from '@/components/comments.vue'



export default {
    data() {
        return {
            id:this.$route.params.id,
            infodata:[]
        }
    },
    components:{
        infocomment:infocomment
    },
    created(){
        this.infocontent()
    },
     methods: {
         infocontent(){
             this.$http.get(`api/getnew/${this.id}`).then(data=>{
                 this.infodata=data.data.message[0]
             })
         }
     },
}
</script>
<style lang="less">

.infocontent{
    padding: 0 5px;
    h3{
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: red
    }
    .infoclass{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 12px
        }
    }
}
</style>