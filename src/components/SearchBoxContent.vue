<script>
import {data} from "../data.js";

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
    <div class="container d_flex justify_end searchbox_container align_items py-2">
        <input @keyup.enter="$emit('keyEnterSearch')" v-model="data.searchInput" type="text" placeholder="Cosa vuoi guardare?" class="search_box" name="SearchBox" id="searchBox">
        <i @click="$emit('searchMovie')" class="fa-solid fa-magnifying-glass search_icon"></i>
        
    </div>
</template>

<style lang="scss" scoped>

.search_icon:hover {
    cursor: pointer;
}

</style>