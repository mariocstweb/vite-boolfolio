<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList },
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
  <ProjectsList :projects="projects" />

</template>

<style scoped></style>
