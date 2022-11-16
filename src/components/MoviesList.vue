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
    <div class="row d_flex align_items">
        <SingleMovie v-for="movie in data.movies" ></SingleMovie>
    </div>
</template>

<style>
</style>