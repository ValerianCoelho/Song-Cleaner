<script>
  import RenamePage from "../pages/RenamePage.svelte";
  import StartPage from "../pages/StartPage.svelte";
  import { startPageStore } from "../store/store";
</script>

{#if $startPageStore == true}
<StartPage/>
{:else}
<RenamePage/>
{/if}