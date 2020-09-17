<template>
  <div class="app-temp">
    <h1 class="app-temp__title">{{ message }}</h1>
    <img src="../assets/img/app-temp.jpg" alt="Test image" class="app-temp__image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Vue - load!'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/utils/vars";
  @import "../assets/scss/utils/mixins";

  .app-temp {
    width: 1280px;
    height: 720px;

    &__title {
      @include font-responsive(64, 32);
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>