<script>
  import FileView from "../Components/FileView.svelte";
  import Entry from "../lib/Entry.svelte";
  import { onMount } from "svelte";
  import { readDir } from "@tauri-apps/api/fs";
  import { sourceFolderStore } from "../store/store";
  import Button from "../lib/Button.svelte";

  let index = 0;
  let songs = [];

  let destructuredSongName = [];
  let destructuredArtistName = [];

  let cleanSongValue = '';
  let cleanArtistValue = '';

  let words;
$: {
  try {
    words = songs[index].name;
    words = words.replace(/[^a-zA-Z0-9]+/g, ' ');
    words = words.split(' ');
    console.log(words)
  } catch (error) {
    console.log(error);
  }
}



  async function getSongNames() {
    try {
      songs = await readDir($sourceFolderStore, { recursive: true });
      console.log(songs);
    } catch (error) {
      console.log(error);
    }
  }

  onMount(() => {
    getSongNames();
  });
</script>

<div class="rename-page">
  <FileView />
  <div class="edit-section">
    {#if songs.length > 0}
      <div class="section">
        <Entry title="File Name" value={songs[index].name} />
      </div>
    {/if}
    <div class="section">
      <Entry title="Song Name" value={cleanSongValue}/>
      <div class="button-list">
        {#if words}
          {#each words as word}
            <div class="button">
              <Button value={word} on:click={()=>{cleanSongValue += word + ' '}}/>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    <div class="section">
      <Entry title="Artist Name" value={cleanArtistValue}/>
      <div class="button-list">
        {#if words}
          {#each words as word}
            <div class="button">
              <Button value={word} on:click={()=>{cleanArtistValue += word + ' '}}/>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    <div class="section">
      <Entry title="Renamed File" />
      <div class="button-list">
        <Button value="Skip" on:click={()=>{index = index + 1}}/>
        <Button value="Rename"/>
      </div>
    </div>
  </div>
</div>

<style>
  .rename-page {
    display: grid;
    grid-template-columns: 200px auto;
  }

  .section {
    padding: 10px;
    border-bottom: 1px solid var(--dark-1);
  }
  .button {
    display: inline-block;
    margin-left: 5px;
  }
</style>
