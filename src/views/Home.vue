<template>
  <div class="home">
    <v-container>
      <v-data-table
        :headers="headers"
        :items="reworks"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.orderNumber="{ item }">
          {{ item.orderNumber }}-{{ item.lineItemNumber }}
        </template>
        <template v-slot:item.status="{ item }">
          <v-select
            :items="status"
            :value="item.status"
            dense
            hide-details
            item-value="id"
            item-text="name"
          ></v-select>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["reworks", "status"])
  },
  methods: {
    ...mapActions(["fetchReworks"])
  },
  data() {
    return {
      headers: [
        { text: "Date", value: "reworked_on" },
        { text: "Order", value: "orderNumber" },
        { text: "Status", value: "status" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  async created() {
    await this.fetchReworks();
  }
};
</script>
