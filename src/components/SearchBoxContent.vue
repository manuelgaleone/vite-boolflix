<script>
import data from "../data.js"

export default {
    name: "SearchBoxContent",
    components: {

    },
    data() {
        return {
            data
        }
    }
}
</script>

<template>
    <div class="container d_flex justify_center searchbox_container py-5">
        <input v-model="data.searchInput" type="text" placeholder="Cosa vuoi guardare?" class="search_box" name="SearchBox" id="searchBox">
        <button class="search_button p-3"><i class="fa-solid fa-magnifying-glass search_icon"></i>Ricerca</button>
    </div>
</template>

<style>
</style>