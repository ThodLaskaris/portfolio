<script>
    import { getBioString } from './Data.svelte.js';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
    <p class='text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed font-light text-text/60 italic max-w-2xl border-l border-primary/20 pl-6'>
        {getBioString()}
    </p>
</div>