<template>
  <Layout>
    <div>
      <Crud></Crud>
    </div>
  </Layout>
</template>

<script>
import "./assets/tailwind.css";
import Crud from "./modules/crud/index.vue";
import Layout from "./modules/layout/Layout.vue";

export default {
  name: "App",
  components: { Crud, Layout },
  
};
</script>

<style></style>
