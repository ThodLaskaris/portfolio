<script>
    import Project from '../landing/Project.svelte';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
    <div class='relative'>
        <Project />
    </div>
</div>