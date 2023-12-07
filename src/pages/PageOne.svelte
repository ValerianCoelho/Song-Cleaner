<script>
  import { open } from "@tauri-apps/api/dialog";
  import { readDir, BaseDirectory, renameFile } from '@tauri-apps/api/fs';

  async function processEntries(entries) {
    for (const entry of entries) {
      if (entry.children) {
        processEntries(entry.children)
      }
      else {
        console.log(`Entry: ${entry.path}`);
        console.log(entry)
        try {
          await renameFile(entry.path, entry.path + "Hello")
        }
        catch(error) {
          console.log(error)
        }
      }
    }
  }

  async function DialogOpen() {
    try {
      const folderLocations = await open({
        multiple: false,
        directory: true
      });
      // console.log(folderLocations);
      const folderLocation = Array.isArray(folderLocations) ? folderLocations[0] : folderLocations;

      if(folderLocation) {
        const entries = await readDir(folderLocation, { recursive: true });
        processEntries(entries);
      }
      
    } 
    catch(error) {
      console.log(error);
    }
}
</script>

<div class="page-1">
  <button on:click={DialogOpen}>Select File</button>
</div>

<style>
    
</style>