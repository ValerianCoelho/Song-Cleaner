<script>
  import FileView from "../Components/FileView.svelte";
  import Entry from "../lib/Entry.svelte";
</script>

<div class="rename-page">
  <FileView/>
  <div class="edit-section">
    <div class="section">
      <Entry title="File Name"/>
    </div>
    <div class="section">
      <Entry title="Song Name"/>
    </div>
    <div class="section">
      <Entry title="Artist Name"/>
    </div>
    <div class="section">
      <Entry title="Renamed File"/>
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
</style>