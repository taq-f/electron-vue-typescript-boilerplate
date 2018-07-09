<template>
  <div class="app">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      msg: "App"
    };
  }
});
</script>

<style lang="scss">
.app {
}
</style>
