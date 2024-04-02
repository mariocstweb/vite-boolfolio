<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import AppLoader from './components/AppLoader.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage, AppLoader },
}
</script>

<template>
  <AppHeader />
  <main class="container p-2">
    <RouterView />

  </main>

</template>

<style scoped></style>
