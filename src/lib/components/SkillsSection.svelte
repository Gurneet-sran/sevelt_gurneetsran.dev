<script lang="ts">
  import CircularProgress from './CircularProgress.svelte';
  import LinearProgress from './LinearProgress.svelte';
</script>

<div class="crt-paper-cont paper-padd clear-mrg">
  <section id="skills" class="section padd-box brd-btm">
    <div class="row">
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">personal information</h3>
        <dl class="dl-horizontal clear-mrg">
          <dt class="text-upper">Full Name</dt>
          <dd>Robert Smith</dd>
          <dt class="text-upper">D.o.b.</dt>
          <dd>05 June 1988</dd>
          <dt class="text-upper">address</dt>
          <dd>24058, Belgium, Brussels, Liutte 27, BE</dd>
          <dt class="text-upper">e-mail</dt>
          <dd>robertsmith@company.com</dd>
          <dt class="text-upper">phone</dt>
          <dd>+1 256 254 84 56</dd>
          <dt class="text-upper">freelance</dt>
          <dd>till March 25, 2016</dd>
        </dl>
      </div>
      <div class=" clear-mrg">
        <h3 class="title-thin text-muted">languages</h3>
        <div
          class="progress-bullets crt-animate"
          role="progressbar"
          aria-valuenow="97"
          aria-valuemin="0"
          aria-valuemax="10"
        >
          <strong class="progress-title">English</strong>
          <span class="progress-bar">
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet"></span>
          </span>
          <span class="progress-text text-muted">native</span>
        </div>
        <div
          class="progress-bullets crt-animate"
          role="progressbar"
          aria-valuenow="84"
          aria-valuemin="0"
          aria-valuemax="10"
        >
          <strong class="progress-title">Spanish</strong>
          <span class="progress-bar">
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
          </span>
          <span class="progress-text text-muted">fluent</span>
        </div>
        <div
          class="progress-bullets crt-animate"
          role="progressbar"
          aria-valuenow="37"
          aria-valuemin="0"
          aria-valuemax="10"
        >
          <strong class="progress-title">Italian</strong>
          <span class="progress-bar">
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet fill"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
            <span class="bullet"></span>
          </span>
          <span class="progress-text text-muted">beginner</span>
        </div>
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
