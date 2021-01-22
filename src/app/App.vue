<template>
  <div id="app">
    <p>The CMS is {{ cms.enabled ? "enabled" : "disabled" }}</p>
    <HelloWorld
      v-bind:title="page.title"
      v-bind:description="page.description"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data: function () {
    return {
      cms: this.$parent.cms,
      page: this.$parent.data,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1rem 0;
}
</style>
