<script>
  import SidePanel from "./lib/SidePanel.svelte";
  import SongCleaner from "./pages/SongCleaner.svelte";
</script>

<main class="container">
  <SongCleaner/>
  <SidePanel/>
</main>

<style>
  :root {
    --dark-1: #454B56;
    --dark-2: #2A2E36;
    --dark-3: #202228;
    --blue-1: #1F6AA4;
  }
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background-color: var(--dark-2);
  }
  main {
    height: 100vh;
  }
</style>