<script>
  export let title, message;
</script>

<style>
  .card {
    border: 1px solid #333;
    padding: 10px;
  }
  .card-title {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>

<svelte:options tag="svelte-card" />

<div class="card">
  <div class="card-title">{title}</div>
  <div>{message}</div>
</div>
