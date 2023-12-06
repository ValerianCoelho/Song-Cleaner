<script>
  import { open } from "@tauri-apps/api/dialog";
  import { readDir, BaseDirectory } from '@tauri-apps/api/fs';

  function processEntries(entries) {
    for (const entry of entries) {
      console.log(`Entry: ${entry.path}`);
      if (entry.children) {
        processEntries(entry.children)
      }
    }
  }

  async function DialogOpen() {
    try {
      const folderLocation = await open({
        directory: true
      });
      console.log(folderLocation);

      const entries = await readDir('', { dir: BaseDirectory.Desktop, recursive: true });
      processEntries(entries);
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