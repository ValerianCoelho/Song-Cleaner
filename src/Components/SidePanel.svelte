<script>
  import Previous from "../lib/Previous.svelte"
  import { startPageStore } from "../store/store";
</script>

<div class="side-panel">
  <Previous on:click={()=>{startPageStore.set(true)}}/>
</div>

<style>
  .side-panel {
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 10px;
  }
</style>