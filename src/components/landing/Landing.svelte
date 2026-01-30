<script>
    import About from './About.svelte';
    import Footer from '../footer/Footer.svelte';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
    <div class="relative min-h-[120px]">
        <About />
    </div>
    <Footer />
</div>