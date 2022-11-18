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
    <div class="row align_items justify_around">
      <div class="col-4">
        <img class="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo">
      </div>
      <div class="col-8 d_flex">
        <SearchBoxContent @searchMovie="callApiSearch" @keyEnterSearch="callApiSearch"></SearchBoxContent>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header_logo {
  width:150px;
}

</style>