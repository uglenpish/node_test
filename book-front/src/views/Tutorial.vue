<template>
  <div class="div">
    hello233
  </div>
</template>

<script>
import TutorialDataService from "../api/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>