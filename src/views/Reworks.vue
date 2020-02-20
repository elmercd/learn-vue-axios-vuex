<template>
  <div class="home">
    <v-container>
      <v-data-table
        :loading="isLoading"
        :headers="headers"
        :items="reworks"
        :items-per-page="5"
        class="elevation-1"
      >
        <template
          v-slot:item.orderNumber="{ item }"
        >{{ item.orderNumber }}-{{ item.lineItemNumber }}</template>
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
  data() {
    return {
      isLoading: false,
      headers: [
        { text: "Date", value: "reworked_on" },
        { text: "Order", value: "orderNumber" },
        { text: "Status", value: "status" }
      ]
    };
  },
  computed: {
    ...mapState(["reworks", "status"])
  },
  methods: {
    ...mapActions(["fetchReworksAction"])
  },
  async created() {
    this.isLoading = true;

    // delaying api call to see loading state
    setTimeout(async () => {
      await this.fetchReworksAction().then(() => {
        this.isLoading = false;
      }, 2000);
    });
  }
};
</script>
