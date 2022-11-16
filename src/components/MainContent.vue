<script>
import MoviesList from "../components/MoviesList.vue";
import SearchBoxContent from "../components/SearchBoxContent.vue";
import {data} from "../data.js"
import axios from "axios";

export default {
    name: "MainContent",
    components: {
        SearchBoxContent,
        MoviesList
    },
    data() {
        return {
            data
        }
    },
    methods : {
    callApiSearch() {
      
        console.log("Click")
        console.log(this.data.searchInput)

        let searchMovie = this.data.searchInput
        let urlApi = `${this.data.apiUrl}${searchMovie}`

        axios.get(urlApi)
      .then(response => {
        console.log(response);
        this.data.movies = response.data.results
      })
      .catch(err => {
        console.error(err.message)
        this.data.error = err.message
      })
    }
  }
}
</script>

<template>
    <SearchBoxContent @searchMovie="callApiSearch"></SearchBoxContent>
    <MoviesList></MoviesList>
</template>

<style>
</style>