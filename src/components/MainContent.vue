<script>
import MoviesList from "../components/MoviesList.vue";
import axios from "axios";

export default {
    name: "MainContent",
    components: {
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
    <div class="container d_flex justify_center searchbox_container py-5">
        <input type="text" placeholder="Cosa vuoi guardare?" class="search_box" name="SearchBox" id="searchBox">
    </div>
    <MoviesList></MoviesList>
</template>

<style>
</style>