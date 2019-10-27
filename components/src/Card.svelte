<script>
  export let title = "Svelte Card";
  export let message = "This is card component created by svelte";
</script>

<style>
  .card {
    box-sizing: border-box;
    width: 300px;
    border: 1px solid #999;
    border-radius: 4px;
    margin: 0 12px 12px 0;
    padding: 12px 24px;
  }
  .card > * {
    color: #333;
  }
  .card-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  .card-body {
    margin-bottom: 12px;
  }
</style>

<svelte:options tag="svelte-card" />

<div class="card">
  <div class="card-title">{title}</div>
  <div class="card-body">{message}</div>
  <slot name="footer" />
</div>
