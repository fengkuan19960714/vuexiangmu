<template>
    <div class="commentclass">
        <p>评论</p>
        <hr>
        <textarea name="" id="" cols="30" rows="20" placeholder="请输入评论" v-model="msg"></textarea>
        <mt-button type="danger" size="large" plain @click="inputchange">发表</mt-button>
        <mt-button type="primary" size="large" plain>加载更多...</mt-button>
        <ul>
            <li v-for="(item,index) in commentsList" :key="index">
                <div class="commentuser">
                <span>{{item.user_name}}</span><span>{{item.add_time | capitalize}}</span>
                </div>
                <p>{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["songdata"],
    data() {
        return {
            msg:"",
            commentsList:[]
        }
    },
    created(){
        this.active()
    },
    methods: {
        inputchange(){
            this.$http.post(`http://lovegf.cn:8899/api/postcomment/${this.songdata}`,{content:this.msg}).then(data=>{
                console.log(data);
            },err=>{
                console.log("请求失败")
            })
        },
        active(){
            this.$http.get(`http://lovegf.cn:8899/api/getcomments/${this.songdata}?pageindex=1`).then(data=>{
                this.commentsList=data.body.message
                console.log(data.body.message)
            })
        }
    },
}
</script>
<style lang="less">
    .commentclass{
    textarea{
        margin: 10px 0
        }
    ul{
        li{
            .commentuser{
                display: flex;
                justify-content: space-between;
                span{
                    color: skyblue
                }
            }
        }
    }
    }
</style>