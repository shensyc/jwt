import Vue from 'vue'
import Vuex from 'vuex'
import {login,validate} from './api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:''
  },
  mutations: {
    setUsername(state,username){
      state.username = username;
    }
  },
  actions: {
    async  validate({commit}){
      const r = await validate();
      console.log(r);
      if(r.code===1){
        return false;
      }
      commit('setUsername',r.username);
      localStorage.setItem('token',r.token);
      return true;
    },
    async login({commit},username){
     let r =  await login(username);
     console.log(r);
     if(r.code===1){
       return Promise.reject(r);
     }
     localStorage.setItem('token',r.token);
     commit('setUsername',r.username);
    }
  }
})
