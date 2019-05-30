import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
    state,
    actions:{
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        }
    },
    mutations,
    // getters:{
    //     计算state里的数据，得到新数据
    // }
})