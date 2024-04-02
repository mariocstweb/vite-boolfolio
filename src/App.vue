<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage },
}
</script>

<template>
  <AppHeader />
  <!-- <HomePage /> -->
  <main class="container p-2">
    <RouterView />

  </main>

</template>

<style scoped></style>
