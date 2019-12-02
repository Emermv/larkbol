<template>
  <div>
    <div class="dialog md-layou md-vertical-align-start">
      <div class="header md-layout md-vertical-align-center">
        <div
          class="md-layout md-flex-80 md-flex-xsmall-100 md-flex-small-100 md-align-xsmall-center md-align-small-center"
        >
          <router-link to="/">
            <img src="../assets/larkbol-logo.png" alt="El larkbolito" class="logo" />
          </router-link>
        </div>
        <div class="nav md-layout md-flex-20 md-vertical-align-center md-hide-small md-hide-xsmall">
          <router-link to="/dinamica">DINÁMICA</router-link>
          <router-link to="/bases">CONDICIONES</router-link>
          <router-link to="/premio">PREMIOS</router-link>
        </div>
      </div>
      <div class="md-layout md-flex-100 md-align-center md-vertical-align-center">
        <div
          class="md-layout md-flex-60 md-flex-small-90 md-flex-xsmall-90 primary-text regular-font" style="margin-top:50px"
        >
          <h1 class="md-layout md-flex-100">PREMIOS</h1>
          <strong>
            Se sorteará un buffet criollo navideño para 6 personas, en el restaurante criollo El Cascajal ubicado en Lima Perú.
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Premios"
};
</script>
