<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'ProjectsList',
  components: { ProjectCard },
  props: { projects: Array }

}
</script>

<template>
  <section class="container">
    <div v-if="projects.length">
      <div class="row row-cols-3">
        <div class="col h-100 mb-3" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" :isDetail="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>