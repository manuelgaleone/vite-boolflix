import {reactive} from 'vue'

export const data = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=c22c2495fac32d96c7c3bf43c0fb69c5&query=',
    movies: "",
    languageIcon:"https://www.countryflagicons.com/STYLE/size/COUNTRYCODE.png",
    searchInput: ""
})