<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script>
    import Button from "../lib/Button.svelte";
    import Entry from "../lib/Entry.svelte";
    import { open } from "@tauri-apps/api/dialog";
    import { sourceFolderStore, destinationFolderStore, startPageStore } from "../store/store";

    async function getSourceDirectory() {
      const sourceFolders = await open({
        multiple: false,
        directory: true
      })
      const sourceFolder = Array.isArray(sourceFolders) ? sourceFolders[0] : sourceFolders;
      sourceFolderStore.set(sourceFolder);;
    }
    async function getDestinationDirectory() {
      const destinationFolders = await open({
        multiple: false,
        directory: true
      })
      const destinationFolder = Array.isArray(destinationFolders) ? destinationFolders[0] : destinationFolders;
      destinationFolderStore.set(destinationFolder);
    }
  
  </script>
  <div class="start-page">
      <div class="browse-source">
      <div class="entry">
        <Entry value={$sourceFolderStore}/>
      </div>
      <div class="button" on:click={getSourceDirectory}>
        <Button value="Browse"/>
      </div>
    </div>
      <div class="browse-destination">
      <div class="entry">
        <Entry value={$destinationFolderStore}/>
      </div>
      <div class="button" on:click={getDestinationDirectory}>
        <Button value="Browse"/>
      </div>
    </div>
    <div class="next-btn" on:click={()=>{startPageStore.set(false)}}>
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