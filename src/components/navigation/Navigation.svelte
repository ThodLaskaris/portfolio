<script>
    import { ui } from '../landing/Data.svelte.js';
    const brandYear = new Date().getFullYear();

</script>

<nav class="fixed top-0 left-0 w-full z-50 py-8 px-4 sm:px-12 flex justify-between items-center mix-blend-difference text-surface">
    <div class="group cursor-default select-none">
        <span class="font-mono text-xs font-black tracking-[-0.15em] text-primary transition-all duration-300 group-hover:tracking-normal">
            TL
        </span>
        <span class="font-mono text-[9px] text-surface/30 mx-0.5">/</span>
        <span class="font-mono text-[10px] font-light tracking-[0.3em] text-surface/60">
            {brandYear}
        </span>
    </div>
    
    <div class="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold">
        <button 
            onclick={() => ui.activeTab = 'projects'} 
            class="{ui.activeTab === 'projects' ? 'text-primary border-primary' : 'text-surface/50 hover:text-surface border-transparent'} border-b transition-all duration-300 uppercase pb-1 outline-none">
            Projects
        </button>
        <button 
            onclick={() => ui.activeTab = 'about'} 
            class="{ui.activeTab === 'about' ? 'text-primary border-primary' : 'text-surface/50 hover:text-surface border-transparent'} border-b transition-all duration-300 uppercase pb-1 outline-none">
            About
        </button>
        <button 
            onclick={() => ui.activeTab = 'contact'} 
            class="{ui.activeTab === 'contact' ? 'text-primary border-primary' : 'text-surface/50 hover:text-surface border-transparent'} border-b transition-all duration-300 uppercase pb-1 outline-none">
            Contact
        </button>
    </div>
</nav>