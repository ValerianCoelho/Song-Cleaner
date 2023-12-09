<script>
  import FileView from "../Components/FileView.svelte";
  import Entry from "../lib/Entry.svelte";
  import { onMount } from "svelte";
  import { readDir, renameFile } from "@tauri-apps/api/fs";
  import { sourceFolderStore, destinationFolderStore, songList } from "../store/store";
  import Button from "../lib/Button.svelte";

  let index = 0;
  let songs = [];

  const specialChars = ["'", ", ", "- "]

  let cleanSongValue = '';
  let cleanArtistValue = '';
  $: cleanFileName = cleanArtistValue.trim() + ' - ' + cleanSongValue.trim() + '.mp3';
  let words;
  $: {
    try {
      words = songs[index].name;
      words = words.replace(/[^a-zA-Z0-9]+/g, ' ');
      words = words.split(' ');
      cleanSongValue = '';
      cleanArtistValue = '';
    } catch (error) {
      console.log(error);
    }
  }



  async function getSongNames() {
  try {
    songs = await readDir($sourceFolderStore, { recursive: true });
    const newSongList = songs.map(song => song.name);
    songList.set(newSongList);
  } catch (error) {
    console.log(error);
  }
}

  async function renameSong() {
    try {
      await renameFile(songs[index].path, $destinationFolderStore + '\\' + cleanFileName)
      index = index + 1;
    } catch(error) {
      console.log(error);
    }
  }

  onMount(() => {
    getSongNames();
  });
</script>

<div class="rename-page">
  <div class="file-view">
    <FileView title={"Song Names"} songList={$songList}/>
  </div>
  <div class="edit-section">
    {#if songs.length > 0}
      <div class="section">
        <Entry title="File Name" value={songs[index].name}/>
      </div>
    {/if}
    <div class="section">
      <Entry 
        title="Artist Name" 
        value={cleanArtistValue} 
        on:input={(event)=>{
          cleanArtistValue = event.target.value;
        }}/>
      <div class="button-list">
        {#if words}
          {#each words as word}
            <div class="button">
              <Button value={word} on:click={(event)=>{
                if(event.ctrlKey) {
                  cleanArtistValue += word + " ";
                  return;
                }
                cleanArtistValue += word;
              }}/>
            </div>
          {/each}
          {#each specialChars as char}
            <div class="button">
              <Button variant="green" value={char} on:click={()=>{cleanArtistValue += char}}/>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    <div class="section">
      <Entry 
        title="Song Name" 
        value={cleanSongValue}
        on:input={(event)=>{
          cleanSongValue = event.target.value;
        }}
      />
      <div class="button-list">
        {#if words}
          {#each words as word}
            <div class="button">
              <Button value={word} on:click={(event)=>{
                if(event.ctrlKey) {
                  cleanSongValue += word + " ";
                  return;
                }
                cleanSongValue += word;
              }}/>
            </div>
          {/each}
          {#each specialChars as char}
            <div class="button">
              <Button variant="green" value={char} on:click={()=>{cleanSongValue += char}}/>
            </div>
          {/each}
        {/if}
      </div>
    </div>
    <div class="section">
      <Entry title="Renamed File" value={cleanFileName}/>
      <div class="button-list">
        <Button value="Skip" on:click={()=>{index = index + 1}}/>
        <Button value="Rename" on:click={renameSong}/>
        <Button value="Reset" on:click={()=> {
          cleanSongValue = '';
          cleanArtistValue = '';
        }}/>
      </div>
    </div>
  </div>
</div>

<style>
  .rename-page {
    display: grid;
    grid-template-columns: 250px auto;
  }

  .section {
    padding: 10px;
    border-bottom: 1px solid var(--dark-1);
  }
  .button {
    display: inline-block;
    margin-left: 5px;
  }
  .file-view {
    overflow: auto;
  }
  /* Target WebKit browsers like Chrome and Safari */
::-webkit-scrollbar {
  width: 12px; /* width of the scrollbar */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-1);
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--dark-3);
}

/* Handle when it's dragging */
::-webkit-scrollbar-thumb:active {
  background: #555;
}

/* Track when it's dragging */
::-webkit-scrollbar-track:active {
  background: #ccc;
}
</style>
