<script>
import SearchBoxContent from "../components/SearchBoxContent.vue";

export default {
  name:"HeaderContent",
  components: {
    SearchBoxContent
  }
}
</script>

<template>
  <div class="container header_content">
    <div class="row align_items justify_around p-3">
      <div class="col-4">
        <h1 class=" header_title ">
          Netflix, ma anche meglio.
        </h1>
      </div>
      <div class="col-8">
        <SearchBoxContent @searchFunction="$emit('searchFunction')"></SearchBoxContent>
      </div>
    </div>
  </div>
</template>

<style>
</style>