<script>
  import Button from './lib/Button.svelte';
  import Entry from './lib/Entry.svelte';
</script>

<main class="container">
  <Button value="Browse"/>
  <Entry/>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
</style>