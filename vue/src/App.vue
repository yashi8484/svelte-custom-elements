<template>
  <div class="container">
    <h1>This is Svelte x {{ name }} page</h1>
    <div class="content-wrapper">
      <template v-for="card in cards">
        <svelte-card
          :title="card.title"
          :message="card.message"
          :key="card.title"
        />
      </template>
    </div>
  </div>
</template>

<script>
import "../public/svelte-components";

export default {
  data() {
    return {
      name: "Vue",
      cards: [...Array(10)].map((_, i) => ({
        title: `Card in Vue ${i + 1}`,
        message: `This is svelte-card element ${i + 1}`
      }))
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
