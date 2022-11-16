<script>
export default {
    name: "SingleMovie",
    components: {
        
    },
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="col-3 px-2 py-2 ">
        <div class="movie movie_card p-2 text-center">
            <!-- <img class="movie_image py-2" src="../assets/img/flavicon.png" alt="Movie Image"> -->
            <h3 class="movie_title p-2">
                {{movie.title}}
            </h3>
            <h4 class="movie_original_title">
                {{movie.original_title}}
            </h4>
            <p class="language">
                {{movie.original_language}}
            </p>
            <p class="vote">
                {{movie.vote_average}}
            </p>
        </div>
    </div>
</template>

<style>
</style>