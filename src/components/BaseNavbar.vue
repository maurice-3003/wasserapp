<script setup>
import { computed } from 'vue';
import { routes } from '../router/router';

const navLinks = computed(() => 
  routes.filter(route => route.meta && route.meta.navbarLink)
);
</script>

<template>
  <div class="nav-container">
    <nav>
        <h2>Menü</h2>
        <ul>
        <li v-for="navLink in navLinks" :key="navLink.name">
            <RouterLink :to="navLink.path">{{ navLink.name }}</RouterLink>
        </li>
        </ul>
    </nav>
</div>
</template>

<style scoped>
.nav-container {
  position: --webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  min-width: 250px;
  height: 100%;
  background-color: var(--wbp-orange);
  border-radius: var(--base-border-radius);
}

nav {
  width: 100%;
}

li {
  font-size: 1.5em;
  border-bottom: 1px solid white;
  padding: 0.2em 0.6em;
}

li:first-child {
  border-top: 1px solid white;
}

a:link, a:visited, a:hover, a:active {
  color: white;
  text-decoration: none;
}

h2 {
  font-size: 2em;
  margin: 0.3em;
  align-content: center;
}
</style>