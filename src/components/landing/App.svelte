<script>
    import { profile, ui } from './Data.svelte.js';
    import Landing from './Landing.svelte';
    import Projects from '../projects/Projects.svelte';
    import Contact from '../contact/Contact.svelte';
</script>

<section class='min-h-screen flex flex-col py-12 max-w-full overflow-hidden'>
    <header class='mt-[25vh] mb-12 shrink-0'>
        <h1 class='font-display text-[clamp(2.5rem,6vw,4.5rem)] font-[200] text-text/80 tracking-[-0.02em] leading-none uppercase'>
            {profile.name}
        </h1>
        <p class='text-[9px] uppercase tracking-[0.6em] text-primary font-bold mt-2 italic opacity-70'>
            {profile.role}
        </p>
    </header>

    <div class="relative w-full">
        {#if ui.activeTab === 'about'}
            <Landing />
        {:else if ui.activeTab === 'projects'}
            <Projects />
            {:else if ui.activeTab === 'contact'}
            <Contact/>
        {/if}
    </div>
</section>