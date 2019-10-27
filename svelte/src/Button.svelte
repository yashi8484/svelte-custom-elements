<script>
  export let text = "Svelte Button";
</script>

<style>
  .button {
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 12px;
    font-size: 1rem;
    color: #ffffff;
    background-color: #0074d9;
    /* background-color: #2ccc3f; */
  }
  .button:hover {
    cursor: pointer;
    background-color: #0082f4;
    /* background-color: #52da62; */
  }
</style>

<svelte:options tag="svelte-button" />

<button class="button">{text}</button>
