<template>
  <div class="container">
    <h1>Svelte x {{ name }}</h1>
    <div class="content-wrapper">
      <template v-for="card in cards">
        <svelte-card
          :title="card.title"
          :message="card.message"
          :key="card.title"
        >
          <svelte-button
            slot="footer"
            @click="handleButtonOnClick"
          ></svelte-button>
        </svelte-card>
      </template>
    </div>
  </div>
</template>

<script>
import "../public/svelte-elements";

export default {
  data() {
    return {
      name: "Vue",
      cards: [...Array(10)].map((_, i) => ({
        title: `Card in Vue ${i + 1}`,
        message: `svelte-card element ${i + 1}`
      }))
    };
  },
  methods: {
    handleButtonOnClick() {
      console.log("button clicked!");
    }
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
