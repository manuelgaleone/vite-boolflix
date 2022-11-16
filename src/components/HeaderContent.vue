<script>
import SearchBoxContent from "../components/SearchBoxContent.vue";
import axios from "axios";
import {data} from "../data.js"

export default {
  name:"HeaderContent",
  components: {
    SearchBoxContent
  },
  data() {
    return {
      data
    }
  },
  methods: {
    callApiSearch() {
      
      console.log("Click")
      console.log(this.data.searchInput)

      let searchMovie = this.data.searchInput
      let urlApi = `${this.data.apiMultiUrl}${searchMovie}`

      axios.get(urlApi)
    .then(response => {
      console.log(response);
      this.data.movies = response.data.results
    })
    .catch(err => {
      console.error(err.message)
      this.data.error = err.message
    })
  },
  }
}
</script>

<template>
  <div class="container header_content">
    <div class="row align_items justify_around p-2">
      <div class="col-4">
        <h1 class=" header_title ">
          Netflix, ma anche meglio.
        </h1>
      </div>
      <div class="col-8 d_flex">
        <SearchBoxContent @searchMovie="callApiSearch" @keyEnterSearch="callApiSearch"></SearchBoxContent>
      </div>
    </div>
  </div>
</template>

<style>
</style>