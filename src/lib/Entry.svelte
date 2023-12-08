<script>
  export let value = "";
  export let title = "";
</script>

<div class="entry">
  <input type="text" value={value}>
  <div class="title">{title}</div>
</div>

<style>
  .entry {
    padding: 10px 0;
    position: relative;
  }
  input[type="text"] {
    background-color: var(--dark-2);
    border: 1px solid var(--dark-1);
    width: 100%;
    outline: none;
    border-radius: 2px;
    height: 40px; 
    color: gray;
    padding: 0 10px;

  }
  input[type="text"]:focus {
    border: 1px solid var(--dark-0);
  }
  .title {
    position: absolute;
    top: 5px;
    left: 10px;
    color: white;
    font-size: 10px;
    padding: 0 2px;
  }
</style>