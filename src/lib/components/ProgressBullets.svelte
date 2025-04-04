<script lang="ts">
  // Props using Svelte 5 syntax
  let { progress = 0, title = "", text = "" } = $props();
  
  // Calculate how many bullets should be filled
  let filledBullets = $derived(Math.round((progress / 100) * 10));
  let totalBullets = 10;
</script>

<div
  class="progress"
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
>
  <strong class="progress__title">{title}</strong>
  <span class="progress__bar">
    {#each Array(totalBullets) as _, i}
      <span class="progress__bullet" class:progress__bullet--filled={i < filledBullets}></span>
    {/each}
  </span>
  <span class="progress__text progress__text--muted">{text}</span>
</div>

<style>
  .progress {
    margin-bottom: 1.5rem;
  }
  
  .progress__title {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
  
  .progress__bar {
    display: flex;
    gap: 0.25rem;
  }
  
  .progress__bullet {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--color-primary);
  }
  
  .progress__bullet--filled {
    background-color: var(--color-primary);
  }
  
  .progress__text {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.8rem;
  }
  
  .progress__text--muted {
    color: var(--color-text-tertiary);
  }
</style> 