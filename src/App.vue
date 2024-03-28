<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader },
  data: () => ({ projects: [] }),
  methods: {
    fetchProject() {
      axios.get(endpoint).then(res => {
        // console.log(res.data)
        this.projects = res.data;
      })

    }

  },
  created() {
    this.fetchProject()
  }

}
</script>

<template>
  <AppHeader />
  <h1 class="text-center">Ciao</h1>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <p v-text="project.title"></p>
    </li>
  </ul>
</template>

<style scoped></style>
