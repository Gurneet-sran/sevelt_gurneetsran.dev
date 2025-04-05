<script lang="ts">
  // Props using Svelte 5 syntax
  let { progress = 0, title = "" } = $props();
  
  // Calculate the stroke-dashoffset based on progress percentage
  const circumference = 298.493; // 2 * π * 47.5 (radius)
  let offset = $derived(circumference * (1 - progress / 100));
</script>

<div
  class="progress"
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div
    class="progress__bar"
    data-text="{progress}%"
    data-value={progress / 100}
    style="position: relative;"
  >
    <svg viewBox="0 0 100 100" style="display: block; width: 100%;">
      <path
        d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
        stroke="var(--color-primary)"
        stroke-width="5"
        fill-opacity="0"
        style="stroke-dasharray: {circumference}, {circumference}; stroke-dashoffset: {offset};"
        class="progress__path"
      ></path>
    </svg>
    <div
      class="progress__text"
      style="top: 50%; left: 50%; color: inherit; position: absolute; margin: 0px; padding: 0px; transform: translate(-50%, -50%);"
    >
      {progress}%
    </div>
  </div>
  <strong class="progress__title">{title}</strong>
</div>

<style>
  .progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .progress__bar {
    position: relative;
    width: 100%;
    max-width: 150px;
    margin-bottom: 0.5rem;
  }
  
  .progress__title {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
  
  .progress__text {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .progress__path {
    transition: stroke-dashoffset 0.5s ease;
  }
</style> 