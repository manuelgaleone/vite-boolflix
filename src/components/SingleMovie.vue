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
            ],
            selectedFlag: ''
        }
    },
    methods: {
        randomItem(items) {
        return items[Math.floor(Math.random()*items.length)];
        }
    },
    created() {
    this.selectedFlag = this.randomItem(this.flags)
  }
}
</script>

<template>
    <div class="col-2 px-2 py-2 ">
        <div class="movie movie_card p-2 text-center">
            <!-- <img class="movie_image py-2" src="../assets/img/flavicon.png" alt="Movie Image"> -->
            <h3 class="movie_title p-2">
                {{movie.title}}
            </h3>
            <h4 class="movie_original_title">
                {{movie.original_title}}
            </h4>
            <div class="language">
                <p v-if="selectedFlag"><img class="flag_icon" :src=selectedFlag alt=""></p>
            </div>
            <p class="vote py-3">
                {{movie.vote_average}}
            </p>
        </div>
    </div>
</template>

<style>

</style>