<template>
  <div>
    <div>This is Svelte x {{ name }} page</div>
  </div>
</template>

<script>
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
