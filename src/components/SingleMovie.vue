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
            <img class="movie_image py-2" src="../assets/img/flavicon.png" alt="Movie Image">
            <h3 class="p-2">
                {{movie.original_name}}
            </h3>
        </div>
    </div>
</template>

<style>
</style>