import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    telefoni: [],
    tableti: [],
    users: [],
    admin: false
  },

  mutations: {
    setUser: function(state, user){
      state.user = user;
    },

    setAdmin: function(state,admin){
      state.admin = admin;
    },

    set_telefoni: function (state, telefoni) {
      state.telefoni = telefoni;
    },

    add_telefon: function (state, telefoni) {
      state.telefoni.push(telefoni);
    },

    remove_telefon: function (state, id) {
      for (let m = 0; m < state.telefoni.length; m++) {
        if (state.telefoni[m].id === id) {
          state.telefoni.splice(m, 1);
          break;
        }
      }
    },

    update_telefon: function (state, payload) {
      for (let m = 0; m < state.telefoni.length; m++) {
        if (state.telefoni[m].id === parseInt(payload.id)) {
          state.telefoni[m].marka = payload.tel.marka;
          state.telefoni[m].model = payload.tel.model;
          state.telefoni[m].procesor = payload.tel.procesor;
          state.telefoni[m].verzija = payload.tel.verzija;
          break;
        }
      }
    },

    set_tableti: function (state, tableti) {
      state.tableti = tableti;
    },

    add_tablet: function (state, tableti) {
      state.tableti.push(tableti);
    },

    remove_tablet: function (state, id) {
      for (let m = 0; m < state.tableti.length; m++) {
        if (state.tableti[m].id === id) {
          state.tableti.splice(m, 1);
          break;
        }
      }
    },

    update_tablet: function (state, payload) {
      for (let m = 0; m < state.tableti.length; m++) {
        if (state.tableti[m].id === parseInt(payload.id)) {
          state.tableti[m].marka = payload.tel.marka;
          state.tableti[m].model = payload.tel.model;
          state.tableti[m].procesor = payload.tel.procesor;
          state.tableti[m].verzija = payload.tel.verzija;
          break;
        }
      }
    }

  },

  actions: {

    admin : function({commit}){
      fetch('http://localhost:81/api/isAdmin', {
        method: 'get'

      }).then((response) =>{
        if(!response.ok)
          throw response;
        return response.json();

      }).then((jsonData) =>{
        commit('setAdmin', jsonData);
      });

    },

    login : function ({commit}, user){
      fetch('http://localhost:81/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: user
      }).then((response) => {
        if (!response.ok)
          throw response;

        router.push('/home');
        return response.json();
      }).then((jsonData) => {
        commit('setUser', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    newUser : function ({commit}, user){
      fetch('http://localhost:81/api/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: user
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {

      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    load_telefoni: function ({ commit }) {
      fetch('http://localhost:81/api/telefoni', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('set_telefoni', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    delete_telefon: function({ commit }, id) {
      fetch('http://localhost:81/api/telefon/' + id, { method: 'delete' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('remove_telefon', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    new_telefon: function({ commit }, telefon) {
      fetch('http://localhost:81/api/telefoni', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: telefon
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_telefon', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    change_telefon: function({ commit }, payload) {
      fetch('http://localhost:81/api/telefon/' + payload.id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload.tel
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('update_telefon', {id: payload.id, tel:jsonData});
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    load_tableti: function ({ commit }) {
      fetch('http://localhost:81/api/tableti', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('set_tableti', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    delete_tablet: function({ commit }, id) {
      fetch('http://localhost:81/api/tablet/' + id, { method: 'delete' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('remove_tablet', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    new_tablet: function({ commit }, tablet) {
      fetch('http://localhost:81/api/tablet', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: tablet
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_tablet', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    change_tablet: function({ commit }, payload) {
      fetch('http://localhost:81/api/tablet/' + payload.id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload.tel
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('update_tablet', {id: payload.id, tel:jsonData});
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    }
  }
})
