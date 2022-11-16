<script>
import HeaderContent from "../components/HeaderContent.vue"
import MoviesList from "../components/MoviesList.vue";
import SearchBoxContent from "../components/SearchBoxContent.vue";
import {data} from "../data.js"


export default {
    name: "MainContent",
    components: {
        HeaderContent,
        SearchBoxContent,
        MoviesList
    },
    data() {
        return {
            data,
        }
    },
    methods : {
  },
}
</script>

<template>
    <MoviesList></MoviesList>
</template>

<style>
</style>