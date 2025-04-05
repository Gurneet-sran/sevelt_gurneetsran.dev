<script lang="ts">
  export let title: string;
  export let id: string;
</script>

<section id={id} class="section">
  <h2 class="section-title">{title}</h2>
  <div class="section-content">
    <slot />
  </div>
</section>

<style>
  .section {
    padding: 4rem 2rem;
    scroll-margin-top: 5rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--color-text);
  }

  .section-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }
  }
</style> 