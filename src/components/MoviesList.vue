<script>
import {data} from "../data.js"
import SingleMovie from "./SingleMovie.vue"

export default {
    name: "MoviesList",
    props: {
        movie: Object
    },
    components: {
        SingleMovie
    },
    data() {
        return {
            data
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="container">
        <div class="row_movies justify_space">
            <SingleMovie v-for="movie in data.movies" :movie="movie"></SingleMovie>
        </div>
    </div>
</template>

<style>
</style>