<script>
  import FileView from "./Components/FileView.svelte";
  import Header from "./Components/Header.svelte";
  import MainContainer from "./Components/MainContainer.svelte";
  import SidePanel from "./Components/SidePanel.svelte";
  import { startPageStore } from "./store/store";
</script>

<main class="container">
  <Header/>
  <SidePanel/>
  <MainContainer/>
</main>

<style>
  :root {
    --dark-0: #6c7488;
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
    overflow: hidden;
  }
  main {
    height: 100vh;
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: 40px auto;
  }
</style>