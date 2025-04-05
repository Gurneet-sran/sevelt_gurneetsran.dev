<script lang="ts">
  import { theme } from '$lib/stores/theme';
</script>

<button 
  class="theme-toggle" 
  on:click={() => theme.toggle()}
  aria-label="Toggle dark mode"
>
  {#if $theme}
    <i class="crt-icon crt-icon-sun"></i>
  {:else}
    <i class="crt-icon crt-icon-moon"></i>
  {/if}
</button>

<style>
  .theme-toggle {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-md);
  }

  .theme-toggle i {
    font-size: 1.25rem;
    color: var(--color-text);
  }
</style> 