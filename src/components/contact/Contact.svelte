<script>
    import { profile } from '../landing/Data.svelte.js';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }} class="space-y-12">
    <div class="max-w-2xl border-l border-primary/20 pl-8 space-y-4">
        <p class="text-[clamp(1rem,1.5vw,1.1rem)] font-light text-text/60 leading-relaxed italic">
            {profile.contact.description}
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pl-8 pt-8 border-t border-primary/5">
        <div class="space-y-3">
            <p class="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Direct Communication</p>
            <a href="mailto:{profile.contact.email}" class="block text-xl font-light text-text/80 hover:text-primary transition-colors duration-300">
                {profile.contact.email}
            </a>
        </div>

        <div class="space-y-3">
            <p class="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Digital Presence</p>
            <div class="flex gap-8">
                <a href={profile.contact.github} target="_blank" class="text-sm uppercase tracking-[0.2em] text-text/40 hover:text-text/90 transition-all border-b border-transparent hover:border-primary/40 pb-1">
                    GitHub
                </a>
                <a href={profile.contact.linkedIn} target="_blank" class="text-sm uppercase tracking-[0.2em] text-text/40 hover:text-text/90 transition-all border-b border-transparent hover:border-primary/40 pb-1">
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
</div>