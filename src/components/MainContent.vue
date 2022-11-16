<script>
import MoviesList from "../components/MoviesList.vue";
import HeaderContent from "../components/HeaderContent.vue";
import SearchBoxContent from "../components/SearchBoxContent.vue";
import data from "../data.js"
import axios from "axios";

export default {
    name: "MainContent",
    components: {
        HeaderContent,
        SearchBoxContent,
        MoviesList
    },
    data() {
        return {
            data
        }
    },
    methods : {
    callApi(url) {
      
        axios.get(url)
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
    <HeaderContent></HeaderContent>
    <SearchBoxContent></SearchBoxContent>
    <MoviesList></MoviesList>
</template>

<style>
</style>