<template>
  <div>
    <div>This is Svelte x {{ name }} page</div>
    <my-component />
  </div>
</template>

<script>
import "../public/svelte-components";

export default {
  data() {
    return {
      name: "Vue"
    };
  }
};
</script>

<style scoped>
</style>
