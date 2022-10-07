<template>
<loader v-if="loading" />
  <b-container v-else fluid class="bg-gray-pa mx-0 px-0">
    <b-container class="p-5 container-bio">
      <b-row>
        <b-col>
          <b-img :src="`${url}/${section.bio_image}`" class="w-100 img-fluid" />
        </b-col>
        <b-col>
          <h1 class="name-title text-center">
            {{ section.bio_title }}
          </h1>
          <div v-html="section.bio" />
        </b-col>
      </b-row>
      <b-container>
        <h2 class="project-text text-center">
          Entre sus proyectos empresariales, se encuentra:
        </h2>
      </b-container>
      <b-row>
        <b-col
          v-for="(item, indexProjects) in section.projects"
          :key="indexProjects"
          class="border rounded mx-3 p-3 project-box"
        >
          {{ item.project }}
        </b-col>
      </b-row>
      <div
        class="goal my-3"
        v-html="section.goal"
      />
    </b-container>
  </b-container>
</template>
<script>
import Loader from '~/components/Loader'
export default {
  name: 'BioPage',
  components: {
    Loader
  },
  data () {
    return {
      loading: true,
      section: [],
      url: this.$config.imageURL
    }
  },
  async created () {
    const response = await this.$axios.$get('/landing_patricio_alarcon?fields[]=bio_title,bio,bio_image,projects,goal,goal_image')
    this.section = response.data
    this.loading = false
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/variables";

.project-box {
  background-color: $primary-blue;
  color: #fff;
  text-align: center;
}
.project-text{
  font-family: "Arboria-Bold";
  text-transform: uppercase;
  color: $primary-red;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.container-bio{
  background-color: #f9f9f9;
}
.goal{
  background-color: #f9f9f9;
  // color: #fff;
  padding: 2rem;
}
</style>
