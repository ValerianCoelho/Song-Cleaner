<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script>
    import Button from "../lib/Button.svelte";
    import Entry from "../lib/Entry.svelte";
    import { open } from "@tauri-apps/api/dialog";

    let destinationFolder;
    let sourceFolder;

    async function getSourceDirectory() {
      sourceFolder = await open({
        multiple: false,
        directory: true
      })
    }
    async function getDestinationDirectory() {
      destinationFolder = await open({
        multiple: false,
        directory: true
      })
    }
  
  </script>
  <div class="start-page">
      <div class="browse-source">
      <div class="entry">
        <Entry value={sourceFolder}/>
      </div>
      <div class="button" on:click={getSourceDirectory}>
        <Button value="Browse"/>
      </div>
    </div>
      <div class="browse-destination">
      <div class="entry">
        <Entry value={destinationFolder}/>
      </div>
      <div class="button" on:click={getDestinationDirectory}>
        <Button value="Browse"/>
      </div>
    </div>
    <div class="next-btn">
      <Button value="Next"/>
    </div>
  </div>
  
  <style>
    .start-page {
        background-color: var(--dark-2);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .browse-source, .browse-destination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      gap: 15px;
      width: 100%;
    }
    .entry {
      flex-grow: 1;
    }
    .button, .next-btn {
      height: 40px;
    }
  </style>