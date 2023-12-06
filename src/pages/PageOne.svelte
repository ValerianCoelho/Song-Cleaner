<script>
  import { open } from "@tauri-apps/api/dialog"
  async function DialogOpen() {
    try {
      const confirmDialog = await open({
        directory: true
      });
      console.log(confirmDialog)
    }
    catch(error) {
      console.log(error)
    }
  }
</script>

<div class="page-1">
  <button on:click={DialogOpen}>Select File</button>
</div>

<style>
    
</style>