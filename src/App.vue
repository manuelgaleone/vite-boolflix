<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name:"App",
  components: {
    MainContent,
    HeaderContent
  }
}
</script>

<template>
  <HeaderContent></HeaderContent>
  <MainContent></MainContent>
</template>

<style>
</style>