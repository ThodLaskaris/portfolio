<script>
    import { profile } from '../landing/Data.svelte.js';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 150 }}>
    <hr class='w-full border-t border-text/10 mt-16 mb-8' />

    <dl class='grid grid-cols-2 md:grid-cols-4 gap-12 w-full text-[9px] uppercase tracking-[0.2em]'>
        <div class='flex flex-col gap-3'>
            <dt class='opacity-40 font-bold'>Stack</dt>
            <dd class='text-text/90 font-light italic m-0'>{profile.stack}</dd>
        </div>
        <div class='flex flex-col gap-3'>
            <dt class='opacity-40 font-bold'>Focus</dt>
            <dd class='text-text/90 font-light italic m-0'>{profile.focus}</dd>
        </div>
        <div class='flex flex-col gap-3'>
            <dt class='opacity-40 font-bold'>OS</dt>
            <dd class='text-text/90 font-light italic m-0'>{profile.os}</dd>
        </div>
        <div class='flex flex-col gap-3'>
            <dt class='opacity-40 font-bold'>Location</dt>
            <dd class='text-primary font-medium italic m-0'>{profile.location}</dd>
        </div>
    </dl>
</div>