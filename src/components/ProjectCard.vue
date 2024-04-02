<script>
export default {
  name: 'ProjectCard',
  components: {},
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
    <img :src="project.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ abstract }}</p>
    </div>
  </div>
</template>

<style scoped></style>