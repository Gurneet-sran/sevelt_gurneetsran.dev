<script lang="ts">
  import CircularProgress from './CircularProgress.svelte';
  import LinearProgress from './ProgressBar.svelte';
  import ProgressBullets from './ProgressBullets.svelte';
</script>

<div class="">
  <section id="skills" class="section">
    <div class="row">
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">personal information</h3>
        <dl class="dl-horizontal clear-mrg">
          <dt class="text-upper">Full Name</dt>
          <dd>GURNEET SINGH</dd>
          <dt class="text-upper">D.o.b.</dt>
          <dd>05 June 6969</dd>
          <dt class="text-upper">address</dt>
          <dd>1234 Street, City, State, Zip</dd>
          <dt class="text-upper">e-mail</dt>
          <dd>example@example.com</dd>
          <dt class="text-upper">phone</dt>
          <dd>+1 123 456 7890</dd>
          <dt class="text-upper">freelance</dt>
          <dd>Available</dd>
        </dl>
      </div>
      <div class=" clear-mrg">
        <h3 style="font-weight: 300; color: var(--color-text-secondary);">languages</h3>
        <ProgressBullets progress={60} title="English" text="native"/>
        <ProgressBullets progress={84} title="Spanish" text="fluent"/>
        <ProgressBullets progress={37} title="Italian" text="beginner"/>
       
      </div>
    </div>
    <!-- .row -->
  </section>
  <section id="data" class="section padd-box brd-btm">
    <div class="row">
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">Professional Skills</h3>
        <LinearProgress progress={85} title="WordPress" />
        <LinearProgress progress={60} title="JavaScript" />
        <LinearProgress progress={76} title="Drupal" />
      </div>
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">Professional Skills</h3>
        <div class="row">
          <div class=" text-center">
            <CircularProgress progress={85} title="HTML & CSS" />
          </div>
          <div class=" text-center">
            <CircularProgress progress={95} title="PHP & MySQL" />
          </div>
          <div class=" text-center">
            <CircularProgress progress={90} title="Photoshop" />
          </div>
        </div>
      </div>
    </div>
    <!-- .row -->
  </section>
  <section id="data" class="section padd-box">
    <div class="row">
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">Styled List</h3>
        <ul class="styled-list clear-mrg">
          <li>Customer oriented</li>
          <li>Handling Multi Tasks</li>
          <li>Creative Thinking</li>
          <li>Self Motivated</li>
          <li>Managerial Skills</li>
        </ul>
      </div>
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">Icon List</h3>
        <ul class="crt-icon-list">
          <li><span class="crt-icon crt-icon-music"></span> Music is my Life</li>
          <li><span class="crt-icon crt-icon-music"></span> I love music</li>
          <li><span class="crt-icon crt-icon-music"></span> More Music</li>
          <li><span class="crt-icon crt-icon-music"></span> Music is everything</li>
        </ul>
      </div>
    </div>
    <!-- .row -->
  </section>
</div>

<style>
  .skills {
    padding: 2rem 0;
  }

  .skills__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .skills__title {
    font-size: 1.5rem;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .skills__subtitle {
    font-size: 1rem;
    color: var(--color-text-secondary);
  }

  .skills__container {
    display: grid;
    gap: 2rem;
  }

  .skills__content {
    display: grid;
    gap: 2rem;
  }

  .skills__group {
    display: grid;
    gap: 1.5rem;
  }

  .skills__data {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .skills__content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
