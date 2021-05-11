import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerInfo: []
  },
  mutations: {
    setCustomerInfo(state, payload){
      state.customerInfo = payload;
    },
    // filterByName(state, payload){
    //       alert("hello")
    //     let customerInfo= []
    //     customerInfo = state.customerInfo.find((person) => {
    //       person.name ===payload
    //     })
        
    //     console.log("payload", payload);
    //     console.log("customerInfo", customerInfo);
    // }
  },
  actions: {
    fetchCustomerInfo({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
      console.log("response", response)
      let customerInfo = response.data;
      commit("setCustomerInfo", customerInfo)
    })
    .catch((e)=>{
      console.log("error", e);
    })
    },
    filterByName({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
        console.log("response", response)
        let customerInfo = response.data;
        let cusInfo = customerInfo.filter(pers => pers.name.toLowerCase() == payload.toLowerCase())
        commit("setCustomerInfo", cusInfo);
      })
    },
    filterBySurname({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
        console.log("response", response)
        let customerInfo = response.data;
        let cusInfo = customerInfo.filter(pers => pers.surname.toLowerCase() == payload.toLowerCase())
        commit("setCustomerInfo", cusInfo);
      })
    },
    filterByProfession({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
        console.log("response", response)
        let customerInfo = response.data;
        let cusInfo = customerInfo.filter(pers => pers.profession.toLowerCase() == payload.toLowerCase())
        commit("setCustomerInfo", cusInfo);
      })
    },
    filterByGender({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
        console.log("response", response)
        let customerInfo = response.data;
        let cusInfo = customerInfo.filter(pers => pers.gender.toLowerCase() == payload.toLowerCase())
        commit("setCustomerInfo", cusInfo);
      })
    },
    filterByAge({commit}, payload){
      axios
      .get("http://localhost:3000/customer").then((response)=>{
        console.log("response", response)
        let customerInfo = response.data;
        let cusInfo = customerInfo.filter(pers => pers.age == payload)
        commit("setCustomerInfo", cusInfo);
      })
    },
  },
  getters:{
    getCustomerInfo(state){
      return state.customerInfo;
    }
  }
})
