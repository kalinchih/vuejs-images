<template>
  <div class="drapper">
    <input
      type="file"
      @change="uploadImages($event.target.files); uploading()"
      multiple
      accept="image/*"
      ref="uploadInputFile"
    >
    <span ref="uploadStatus">Drag file here</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadImages",
  methods: {
    ...mapActions(["uploadImages"]),
    // how to call mapAction in a function
    uploading() {
      this.$refs.uploadStatus.textContent = "Uploading...";
      this.$refs.uploadInputFile.disabled = true;
    }
  }
};
</script>
<style scoped>
.drapper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.drapper:hover {
  background-color: #eee;
}
.drapper input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>

