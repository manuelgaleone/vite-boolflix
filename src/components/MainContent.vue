<script>
import MoviesList from "../components/MoviesList.vue";
import HeaderContent from "../components/HeaderContent.vue";
import SearchBoxContent from "../components/SearchBoxContent.vue";
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

        }
    },
    methods : {
    callApi(url) {
      
        axios.get(url)
      .then(response => {
        console.log(response);
        this.data.characters = response.data
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