<script>
import {data} from "../data.js"
import SingleMovie from "./SingleMovie.vue"

export default {
    name: "MoviesList",
    components: {
        SingleMovie
    },
    data() {
        return {
            data
        }
    }
}
</script>

<template>
    <SingleMovie v-for="movie in movies" ></SingleMovie>
</template>

<style>
</style>