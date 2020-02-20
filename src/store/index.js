import Vue from "vue";
import Vuex from "vuex";
import * as rework from "@/api/rework.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reworks: [],
    status: [
      { id: 1, name: "New" },
      { id: 2, name: "Pre-Press" },
      { id: 3, name: "Pre-Press: Assigned" },
      { id: 4, name: "Pre-Press: Pending Design" },
      { id: 5, name: "Pre-Press: Design Assigned" },
      { id: 6, name: "Pre-Press: Pending Customer" },
      { id: 7, name: "Pre-Press: Customer Hold" },
      { id: 8, name: "Pre-Press: Approved" },
      { id: 9, name: "Pre-Press: Error" },
      { id: 10, name: "Pre-Press: Vendor Ready" },
      { id: 11, name: "Vendor: Processing" },
      { id: 12, name: "Vendor: Rejected" },
      { id: 13, name: "Vendor: Accepted" },
      { id: 14, name: "Vendor: Print" },
      { id: 15, name: "Vendor: Fabrication" },
      { id: 16, name: "Vendor: Delay" },
      { id: 17, name: "Vendor: Shipped" },
      { id: 18, name: "Ship: Undelivered" },
      { id: 19, name: "Ship: Delivered" },
      { id: 20, name: "Cancelled" },
      { id: 21, name: "Approval: Pending" },
      { id: 22, name: "Pre-Press: Urgent" },
      { id: 23, name: "Pre-Press: Prepped" },
      { id: 24, name: "Pre-Press: Rework" },
      { id: 25, name: "Pre-Press: Accepted" },
      { id: 26, name: "Pre-Press: Nested" },
      { id: 27, name: "Pre-Press: Ripped" }
    ]
  },
  mutations: {
    fetchReworks(state, newReworks) {
      state.reworks = newReworks;
    }
  },
  actions: {
    async fetchReworks({ commit }) {
      return new Promise((res, rej) => {
        rework
          .fetchReworks()
          .then(response => {
            commit("fetchReworks", response.data);
            res(response);
          })
          .catch(error => {
            rej(error);
          });
      });
    }
  },
  modules: {}
});
