<script>
import { RouterLink } from 'vue-router';
import ShowPage from '../pages/ShowPage.vue';

export default {
  name: 'ProjectCard',
  components: { ShowPage },
  props: { project: Object },
  computed: {
    abstract() {
      const abstract = this.project.content.slice(0, 200);
      return abstract + '...';
    }
  }


}
</script>

<template>
  <div class="card">
    <div class=" d-flex justify-content-between p-2">
      <img :src="project.image" class="card-img-top" alt="...">
      <RouterLink :to="{ name: 'ShowPage', params: { id: project.id } }" class="btn btn-primary">Vedi</RouterLink>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ abstract }}</p>
    </div>
  </div>
</template>

<style scoped></style>