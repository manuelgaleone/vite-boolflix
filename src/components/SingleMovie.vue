<script>
import {data} from "../data.js"

export default {
    name: "SingleMovie",
    components: {
        
    },
    props: {
        movie: Object
    },
    data() {
        return {
            data,
            flags: [
            '../assets/img/ita.svg',
            '../assets/img/usa.svg',
            '../assets/img/vatican.svg'
            ]
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <div class="col-3 px-2 py-2 ">
        <div class="movie movie_card p-2 text-center">
            <!-- <img class="movie_image py-2" src="../assets/img/flavicon.png" alt="Movie Image"> -->
            <h3 class="movie_title p-2">
                {{movie.title}}
                {{movie.name}}
            </h3>
            <p class="movie_media p-2">
                {{movie.media_type}}
            </p>
            <h4 class="movie_original_title">
                {{movie.original_title}}
                {{movie.original_name}}
            </h4>
            <div class="language">
                <p class="no_flag" >Bandiera non presente.</p>
            </div>
            <p class="vote py-3">
                {{movie.vote_average}}
            </p>
        </div>
    </div>
</template>

<style>

</style>