<template>
    <div>
        <el-input style="width:200px" v-model="username"></el-input>
        <el-button @click="login">登录</el-button>
    </div>
</template>

<script>
import login from '../api/index'
    export default {
        data(){
            return {
                username:''
            }
        },
        methods: {
            login(){
                this.$store.dispatch('login',this.username).then(data=>{
                    this.$router.push('/profile');
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>