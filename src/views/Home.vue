<template>
  <div class="home">
    <h1>Welcome to MxPokedex!</h1>
    <h3>Click on any pokemon or use the search</h3>
    <!-- Apollo watched Graphql query -->
    <div v-if="$apollo.loading">Loading...</div>
    <template v-if="!$apollo.loading && pokemons">
      <input type="text" class="search" placeholder="Search..." v-debounce:300ms="debounceSearch" />
      <div class="poke-list">
        <PokemonListCard :pokemon="pokemon" v-for="pokemon in pokemonsFiltered" :key="pokemon.name"></PokemonListCard>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import PokemonListCard from "@/components/PokemonListCard.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    PokemonListCard,
  },
  apollo: {
    pokemons: {
      query: require("../graphql/PokemonHome.gql"),
      variables: {
        limit: 1048,
      },
      result(result) {
        this.pokemonsFiltered = result.data.pokemons.results;
        this.pokemons = result.data.pokemons.results;
      },
    },
  },
})
export default class Home extends Vue {
  limit = 1048; //1048 is the number of pokemon now!
  searchText = "";
  pokemonsFiltered: Array<any> = [];
  pokemons: Array<any> = [];
  debounceSearch(query) {
    this.pokemonsFiltered =
      query && query.toLowerCase()
        ? this.pokemons.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )
        : this.pokemons;
  }
  updated() {
    if (this.pokemons.length !== this.pokemonsFiltered.length) {
      // Force lazyload to check for images if a search is done
      this.$Lazyload.lazyLoadHandler();
    }
  }
}
</script>

<style lang="scss">
.poke-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 8px 8px;
}

.search {
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 0px;
  margin-bottom: 16px;
}
</style>
