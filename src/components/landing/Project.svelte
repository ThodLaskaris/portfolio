<script>
    import { profile } from './Data.svelte.js';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
    <div class="space-y-12"> 
        {#each profile.projects as project}
            <article class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 group">
                <aside class="space-y-4">
                    <h2 class="text-xl font-light text-text/90 uppercase tracking-widest leading-tight">
                        {project.title}
                    </h2>
                    <div class="flex flex-wrap gap-2 pt-2">
                        {#each project.tech as t}
                            <span class="text-[8px] border border-primary/20 px-2 py-1 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                                {t}
                            </span>
                        {/each}
                    </div>
                </aside>
                
                <div class="space-y-8">
                    <ul class="space-y-4 list-none p-0">
                        {#each project.description as line}
                            <li class="text-[clamp(0.9rem,1.1vw,1.1rem)] font-light text-text/70 leading-relaxed">
                                {line}
                            </li>
                        {/each}
                    </ul>

                    {#if project.impact && project.impact.length > 0}
                        <div class="bg-primary/[0.02] p-6 border-l-2 border-primary/10 space-y-3">
                            <p class="text-primary/80 text-[10px] uppercase tracking-[0.2em] font-bold">Key Impact</p>
                            <ul class="space-y-2 list-none p-0">
                                {#each project.impact as point}
                                    <li class="text-[12px] text-text/50 italic flex gap-3">
                                        <span class="text-primary/60">/</span> 
                                        <span>{point}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </div>
            </article>
        {/each}
    </div>
</div>