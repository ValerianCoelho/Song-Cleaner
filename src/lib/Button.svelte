<script>
    export let value;
    export let variant = "blue";
</script>

<button on:click
    style={`--btn-bg-color: ${variant === 'blue' ? '#1F6AA4' : (variant === 'red' ? '#FF0000' : '#1FA46C')};
            --btn-bg-hover-color: ${variant === 'blue' ? '#185482' : (variant === 'red' ? '#CC0000' : '#198659')};
          `}
>
    {value}
</button>

<style>
    button {
        color: white;
        background-color: var(--btn-bg-color);
        border: none;
        padding: 5px 20px;
        font-weight: 100;
        border-radius: 5px;
        transition: 0.1s all;
        font-size: small;
        height: 100%;
    }
    button:hover {
        background-color: var(--btn-bg-hover-color);
    }
</style>
