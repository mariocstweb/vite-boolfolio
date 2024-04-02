<script>
import ProjectsList from '../components/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'HomePage',
  components: { ProjectsList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProject() {
      axios.get(endpoint).then(res => {
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
  <ProjectsList :projects="projects" />

</template>

<style scoped></style>
