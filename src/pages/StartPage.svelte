<script>
    import Button from "../lib/Button.svelte";
    import Entry from "../lib/Entry.svelte";
  
  </script>
  <div class="start-page">
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
    <div class="next-btn">
      <Button value="Next"/>
    </div>
  </div>
  
  <style>
    .start-page {
        background-color: var(--dark-2);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .browse-source, .browse-destination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      gap: 15px;
      width: 100%;
    }
    .entry {
      flex-grow: 1;
    }
    .button, .next-btn {
      height: 40px;
    }
  </style>