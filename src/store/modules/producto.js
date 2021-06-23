export default {
    state:{
        name:localStorage.getItem("name")|| null,
        descripcion:localStorage.getItem("descripcion")|| null,
    },
    getters:{
        name(state){
            return state.name;
        },
        descripcion(state){
            return state.descripcion;
        },
       
    },
    mutations:{  // agrego en un local storage para no perder el valor al recargar
        SET_NAME(state,name){
            state.name = name;
            localStorage.setItem("name",name);
        },
        SET_Descripcion(state,descripcion){
            state.descripcion = descripcion;
            localStorage.setItem("descripcion",descripcion);

        }
    },
    actions:{
        Name({commit},name){
            commit('SET_NAME',name);
        },
        Descripcion({commit},descripcion){
            commit('SET_Descripcion',descripcion);
        }
    }
    }
