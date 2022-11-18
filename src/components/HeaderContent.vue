<script>
import SearchBoxContent from "../components/SearchBoxContent.vue";
import axios from "axios";
import {data} from "../data.js"

export default {
  name:"HeaderContent",
  components: {
    SearchBoxContent
  },
  data() {
    return {
      data
    }
  },
  methods: {
    callApiSearch() {
      
      console.log("Click")
      console.log(this.data.searchInput)

      let searchMovie = this.data.searchInput
      let urlApi = `${this.data.apiMultiUrl}${searchMovie}`

      axios.get(urlApi)
    .then(response => {
      console.log(response);
      this.data.movies = response.data.results
    })
    .catch(err => {
      console.error(err.message)
      this.data.error = err.message
    })
  },
  }
}
</script>

<template>
  <div class="container header_content">
    <div class="row align_items justify_around">
      <div class="col-6 d_flex align_items">
        <img class="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo">
        <div class="navigation d_flex align_items">
          <ul class="menu_list d_flex align_items">
            <li class="menu_element">
              <a class="menu_item px-2" href="#">Home</a>
            </li>
            <li class="menu_element">
              <a class="menu_item px-2" href="#">Serie Tv</a>
            </li>
            <li class="menu_element">
              <a class="menu_item px-2" href="#">Film</a>
            </li>
            <li class="menu_element">
              <a class="menu_item px-2" href="#">Original</a>
            </li>
            <li class="menu_element">
              <a class="menu_item px-2" href="#">Aggiunti di recente</a>
            </li>
            <li class="menu_element">
              <a class="menu_item px-2" href="#">La mia Lista</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6 d_flex align_items">
        <SearchBoxContent @searchMovie="callApiSearch" @keyEnterSearch="callApiSearch"></SearchBoxContent>
        <span class="color_white">Bambini</span>
        <div class="notify px-4">
          <i class="fa-solid fa-bell color_white"></i>
          <div class="red_circle"></div>
        </div>
        <div class="avatar">
            <img class="netflix_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar">
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header_logo {
  width:75px;
}

.deactive {
  color: white;
}

.menu_item {
  color: white;
  text-decoration: none;

}
.menu_list {
  list-style: none;
}

.notify {
  position: relative;
}

.red_circle {
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 5;
}

.netflix_avatar {
  width: 35px;
}

</style>