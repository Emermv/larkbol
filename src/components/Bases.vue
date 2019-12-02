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
          <h1 class="md-layout md-flex-100">CONDICIONES</h1>
          <ul>
            <li>
              Pueden participar en el concurso aquellas personas mayores de edad.
            </li>
            <li>
              El premio solo sera hará valido en Lima, Perú.

            </li>
            <li>
              Para validar tu premios tendrás que mostrar DNI e identificarte como la persona que escribió el comentario en el post de campaña del fan page de Ladrillos Lark.

            </li>
            <li>
              Tiempo de concurso: Lunes 2 hasta el Viernes 13 de diciembre del 2019.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bases"
};
</script>
