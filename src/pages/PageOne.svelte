<script>
    import Button from '../lib/Button.svelte';
    import Entry from '../lib/Entry.svelte';
    import Text from '../lib/Text.svelte';
    import Textbox from '../lib/Textbox.svelte';
</script>

<div class="page-1">
    <div class="title">Rename Songs</div>
    <div class="inner-frame">
        <div class="horizontal-view-box">
            <Entry/>
            <Button value="Browse"/>
        </div>
        <div class="horizontal-view-box">
            <Entry/>
            <Button value="Browse"/>
        </div>
        <Button value="Next"/>
    </div>    
</div>

<style>
    .page-1 {
        padding: 10px;
        background-color: #1E1E1E;
    }
    .title {
        color: white;
        font-size: 20px;
    }
    .inner-frame {
        background-color: #2B2B2B;
    }
</style>