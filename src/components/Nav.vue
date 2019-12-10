<template>
    <div class="md-layout">
       <div
          class="md-layout md-flex-75 md-flex-xsmall-100 md-flex-small-100 md-flex-medium-60"
        >
          <router-link to="/">
            <img src="../assets/larkbol-logo.png" alt="El larkbolito" class="logo" />
          </router-link>
        </div>
        <div class="nav md-layout md-flex-25 md-vertical-align-center md-hide-small md-hide-xsmall  md-flex-medium-40">
          <router-link to="/dinamica">DINÁMICA</router-link>
          <router-link to="/bases">CONDICIONES</router-link>
          <router-link to="/premio">PREMIOS</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'lark-nav'
}
</script>