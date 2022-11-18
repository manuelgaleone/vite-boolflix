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
            flags: ['it',
                    'en']
        }
    },
    methods: {
        reviewMath(num) {
            return Math.ceil(num)
        },
        flagSelect(language) {
            if (this.flags.includes(language)) {
                return true
            } else {
                return false
            }
        },
        putFlag(languageCode) {
            return new URL(`../assets/img/${languageCode}.svg`, import.meta.url).href
        }
    }
}
</script>

<template>
    <!-- <div class="col-3 px-2 py-2 ">
        <div class="movie movie_card p-2 text_center">
            <div class="movie_imgs">
                <img v-if="movie.poster_path === null || movie.poster_path === undefined" class="movie_image p-3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00d53663-c0cd-46e9-9aba-bed9180648cd/d5c3vm5-20410fd2-bb67-4a27-870e-adb06437a71c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwZDUzNjYzLWMwY2QtNDZlOS05YWJhLWJlZDkxODA2NDhjZFwvZDVjM3ZtNS0yMDQxMGZkMi1iYjY3LTRhMjctODcwZS1hZGIwNjQzN2E3MWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BADD_GnMLXva7O9jwAHBzsKBhvpI_oAyjiccAPItofE" alt="Movie Image">
                <img v-else class="movie_image p-3" :src="data.movieImage + movie.poster_path" alt="Movie Image">
            </div>
            <div class="movie_elements text_center">
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
                <div class="reviews">
                    <div v-if="(Math.ceil(movie.vote_average)) === 0" class="vote py-3 d_flex align_items justify_center">
                    0 voti.
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 1" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 2" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 3" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 4" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 5" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 6" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 7" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 8" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 9" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                <div v-if="(Math.ceil(movie.vote_average)) === 10" class="vote py-3 d_flex align_items justify_center">
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                    <i class="fa-solid fa-star star_review"></i>
                </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="col-3 m-3">
        <div class="movie_elements movie_card text-left">
            <div class="poster_img">
                <img v-if="movie.poster_path === null || movie.poster_path === undefined" class="movie_image" src="https://bit.ly/3AqnN4g" alt="">
                <img v-else class="movie_image" :src="data.movieImage + movie.poster_path" alt="">
            </div>
            <div class="text_elements px-3 py-4 d_flex column">
                <h3 class="movie_title">
                    {{movie.title}}
                    {{movie.name}}
                </h3>
                <h4 class="movie_original_title">
                    {{movie.original_title}}
                    {{movie.original_name}}
                </h4>
                <div class="reviews d_flex align_items">
                    <div v-if="movie.vote_average > 0" v-for="star in reviewMath(movie.vote_average /2)" class="stars">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-else v-for="star in reviewMath(movie.vote_average /2)" class="stars">
                        <p class="review">
                            Voto non presente.
                        </p>
                    </div>

                </div>
                <p v-if="movie.overview.length > 0" class="overview">
                    <strong>Overview:</strong>{{movie.overview}}
                </p>
                <p v-else class="overview">
                    <strong>Overview:</strong>Non presente.
                </p>
                <div class="language">
                    <img class="flag_icon" v-if="flagSelect(movie.original_language)" :src="putFlag(movie.original_language)" alt="Flag">
                    <p v-else class="no_flag" alt="">Bandiera non presente.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.text_elements {
    display: none;
}

.movie_card:hover {
    
    .text_elements {
        display: inline-block;
    }
    
    .movie_image {
        opacity: 0;
        transition: 0.3s;
    }

}

</style>