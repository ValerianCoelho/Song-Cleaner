<script>
  import MusicNote from "../lib/MusicNote.svelte"
  const title="Folder Name"
  const songList = [
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name', 
    'Song Name'
  ]
</script>

<div class="file-view">
  <div class="folder-section">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7188 5.90626H10.7715L8.53125 3.66598C8.40981 3.54358 8.26526 3.44653 8.10599 3.38048C7.94671 3.31443 7.7759 3.28071 7.60348 3.28126H3.28125C2.93315 3.28126 2.59931 3.41954 2.35317 3.66568C2.10703 3.91182 1.96875 4.24566 1.96875 4.59376V16.4571C1.96918 16.7916 2.10225 17.1122 2.33876 17.3488C2.57526 17.5853 2.89592 17.7183 3.23039 17.7188H17.7918C18.1204 17.7183 18.4354 17.5876 18.6677 17.3552C18.9001 17.1229 19.0308 16.8079 19.0312 16.4793V7.21876C19.0312 6.87066 18.893 6.53682 18.6468 6.29068C18.4007 6.04454 18.0668 5.90626 17.7188 5.90626ZM3.28125 4.59376H7.60348L8.91598 5.90626H3.28125V4.59376ZM17.7188 16.4063H3.28125V7.21876H17.7188V16.4063Z" fill="white"/>
    </svg>
    <div class="folder-name">{title}</div>
  </div>
  <div class="song-list">
    {#each songList as songName}
      <div class="song-section">
        <div class="branch"></div>
        <div class="song-info">
          <MusicNote/>       
          <div class="song-name">
            {songName}
          </div>
        </div>
      </div>
      {/each}
  </div>
</div>

<style>
  .file-view {
    background-color: var(--dark-3);
    color: white;
    border-right: 1px solid var(--dark-1);
  }
  .folder-section {
    display: flex;
    background-color: var(--dark-2);
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    justify-content: flex-start;
    gap: 5px;
    align-items: center;
    font-size: 14px;
  }
  .song-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .song-section {
    display: flex;
    margin-left: 40px;
    overflow: visible;
    position: relative;
  }
  .song-info {
    display: flex;
    background-color: var(--dark-2);
    padding: 10px;
    font-size: 12px;
    border-radius: 5px;
    width: 148px;
  }
  .branch {
    width: 20px;
    height: 50px;
    border-left: 1px solid var(--dark-1);
    border-bottom: 1px solid var(--dark-1);
    position: absolute;
    z-index: 4;
    bottom: 18px;
    left: -20px;
  }
</style>