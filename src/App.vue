<script>
import HeaderContent from "./components/HeaderContent.vue";
import MainContent from "./components/MainContent.vue";
import FooterContent from "./components/FooterContent.vue";

export default {
  name:"App",
  components: {
    MainContent,
    HeaderContent,
    FooterContent
  }
}
</script>

<template>
  <HeaderContent></HeaderContent>
  <MainContent></MainContent>
  <FooterContent></FooterContent>
</template>

<style>
</style>