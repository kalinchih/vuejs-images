<template>
  <div>
    <div v-if="isLoggedIn" class="ui small images">
      <img v-for="image in allImages" :src="image.link" :key="image.id" class="img-thumbnail">
    </div>
    <h3 v-else>Login to start</h3>
  </div>
</template>

<script>
import image from "../store/modules/image";
import auth from "../store/modules/auth";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Galleries",
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"])
  },
  created() {
    this.fetchImages();
  }
};
</script>
<style scoped>
</style>

