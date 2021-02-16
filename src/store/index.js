import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    telefoni: []
  },

  mutations: {
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
    }
  },

  actions: {
    load_telefoni: function ({ commit }) {
      fetch('http://localhost/api/telefoni', { method: 'get' }).then((response) => {
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
      fetch('http://localhost/api/telefon/' + id, { method: 'delete' }).then((response) => {
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
      fetch('http://localhost/api/telefoni', {
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
      fetch('http://localhost/api/telefon/' + payload.id, {
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
    }
  }
})
