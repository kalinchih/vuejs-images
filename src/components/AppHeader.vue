
<template>
  <div>
    <!-- https://semantic-ui.com/collections/menu.html -->
    <div class="ui secondary pointing menu">
      <a class="active item">Image Storage</a>
      <!-- <a class="item">Messages</a> -->
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/" class="item">Galleries</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <a class="item" @click="logout">Logout</a>
        </div>
        <a v-else class="ui item" @click="login">Login</a>
      </div>
    </div>

    <!-- <div class="ui segment">
      <p></p>
    </div>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  //   methods: mapActions(["login"])
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
