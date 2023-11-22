<script>
  import Button from './lib/Button.svelte';
  import Entry from './lib/Entry.svelte';
  import Text from './lib/Text.svelte';
  import Textbox from './lib/Textbox.svelte';
</script>

<main class="container">
  <Button value="Browse"/>
  <Entry/>
  <Textbox/>
  <Text text="Hello World"/>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
</style>