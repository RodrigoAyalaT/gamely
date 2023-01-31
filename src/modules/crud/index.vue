<template>
  <div>
    <Table @openUpdateForm="updateGameInfo"></Table>
    <div v-if="id != ''">
      <UpdateForm :id="id"></UpdateForm>
    </div>

    <GameForm></GameForm>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import GameForm from "./components/GameForm.vue";
import UpdateForm from "./components/UpdateForm.vue";

export default {
  name: "CrudComponent",
  components: {
    Table,
    GameForm,
    UpdateForm,
  },
  data() {
    return {
      id: "",
    };
  },

  methods: {
    updateGameInfo(value) {
      this.id = value;
    },
  },
};
</script>
