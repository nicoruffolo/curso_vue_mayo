import Vuex from 'vuex'
import Vue from 'vue'


import producto from './modules/producto'

Vue.use(Vuex)

const store = new Vuex.Store({

    modules:{
        producto
    }
})

export default store;