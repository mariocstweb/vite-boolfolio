<script>
import ProjectsList from '../components/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'HomePage',
  components: { ProjectsList },
  data: () => ({
    projects: [],
    isLoading: false,
  }),
  methods: {
    fetchProject() {
      this.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.projects = res.data;
        }).catch(err => {
          console.error(err.message);
        }).then(() => {
          this.isLoading = false;
        })
    }

  },
  created() {
    this.fetchProject()
  }

}
</script>

<template>
  <AppLoader v-if="isLoading" />
  <ProjectsList :projects="projects" />

</template>

<style scoped></style>
