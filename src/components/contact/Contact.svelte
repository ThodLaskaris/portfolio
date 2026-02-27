<script>
    import { profile } from '../landing/Data.svelte.js';
    import { fade } from 'svelte/transition';

    let copied = $state(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(profile.contact.email);
            copied = true;
            setTimeout(() => (copied = false), 2000);
        } catch (err) {
        }
    }
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class='space-y-12'>
    <div class='max-w-2xl border-l border-primary/20 pl-8 space-y-4'>
        <p class='text-[clamp(1rem,1.5vw,1.1rem)] font-light text-text/60 leading-relaxed italic'>
            {profile.contact.description}
    </div>

    <div class='grid grid-cols-1 md:grid-cols-2 gap-12 pl-8 pt-8 border-t border-primary/5'>
        <div class='space-y-3'>
            <p class='text-[10px] uppercase tracking-[0.3em] text-primary font-bold'>Direct Communication</p>
            <div class='group flex items-center gap-4'>
                <a href='mailto:{profile.contact.email}' class='block text-xl font-light text-text/80 hover:text-primary transition-colors duration-300'>
                    {profile.contact.email}
                </a>
                
                <button 
                    onclick={copyEmail}
                    class='p-2 rounded-md hover:bg-primary/5 transition-all duration-300 active:scale-90'
                    aria-label='Copy email'
                >
                    {#if copied}
                        <span in:fade class='text-[10px] uppercase tracking-widest text-primary font-bold'>Copied!</span>
                    {:else}
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='text-text/40 group-hover:text-primary transition-colors'>
                            <rect width='14' height='14' x='8' y='8' rx='2' ry='2'/><path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'/>
                        </svg>
                    {/if}
                </button>
            </div>
        </div>

        <div class='space-y-3'>
            <p class='text-[10px] uppercase tracking-[0.3em] text-primary font-bold'>Digital Presence</p>
            <div class='flex gap-8'>
                <a href={profile.contact.github} target='_blank' rel='noopener noreferrer' class='text-sm uppercase tracking-[0.2em] text-text/40 hover:text-text/90 transition-all border-b border-transparent hover:border-primary/40 pb-1'>
                    GitHub
                </a>
                <a href={profile.contact.linkedIn} target='_blank' rel='noopener noreferrer' class='text-sm uppercase tracking-[0.2em] text-text/40 hover:text-text/90 transition-all border-b border-transparent hover:border-primary/40 pb-1'>
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
</div>