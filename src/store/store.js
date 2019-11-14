import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAction, vuexfireMutations } from 'vuexfire';

import db from './db';

Vue.use(Vuex);

const bindRooms = firebaseAction(async ({ state, bindFirebaseRef, commit }) => {
  const rooms = db.ref('rooms');
  await bindFirebaseRef('rooms', rooms);
});

const updateRoom = firebaseAction(async ({ state, commit }, payload) => {
  const { id, ...rest } = payload;
  await db.ref(`rooms/${id}`).update(rest);
});



const loggedIn = async ({ commit }) => {
  commit('LOGGED_IN');
  commit('LOADED');
};

const loggedOut = async ({ commit }) => {
  commit('LOGGED_OUT');
  commit('LOADED');
};

const store = new Vuex.Store({
  state: {
    rooms: {},
    isLoggedIn: false,
    isLoading: true,
  },
  mutations: {
    ...vuexfireMutations,
    LOGGED_IN(state) {
      state.isLoggedIn = true;
    },
    LOGGED_OUT(state) {
      state.isLoggedIn = false;
    },
    LOADED(state) {
      state.isLoading = false;
    },
    LOADING(state) {
      state.isLoading = true;
    },
  },
  actions: {
    bindRooms,
    updateRoom,
    loggedIn,
    loggedOut,
  },
  getters: {
    // isLoggedIn: (state) => {
    //   return state.isLoggedIn;
    // },
    room: (state) => (roomName) => {
      return state.rooms[roomName];
    },
  },
  modules: {},
});

export default store;
