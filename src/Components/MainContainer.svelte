<script>
  import Button from "../lib/Button.svelte";
  import Entry from "../lib/Entry.svelte";

</script>
<div class="main-container">
	<div class="browse-source">
    <div class="entry">
      <Entry/>
    </div>
    <div class="button">
      <Button value="Browse"/>
    </div>
  </div>
	<div class="browse-destination">
    <div class="entry">
      <Entry/>
    </div>
    <div class="button">
      <Button value="Browse"/>
    </div>
  </div>
</div>

<style>
	.main-container {
		background-color: var(--dark-2);
    height: 100vh;
	}
  .browse-source, .browse-destination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 15px;
  }
  .entry {
    flex-grow: 1;
  }
  .button {
    height: 40px;
  }
</style>
