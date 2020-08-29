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
        this.pokemons = result.data.pokemons.results;
      },
    },
  },
})
export default class Home extends Vue {
  limit = 1048; //1048 is the number of pokemon now!
  query = "";
  pokemons: Array<any> = [];
  debounceSearch(query) {
    this.query = query;
  }

  get pokemonsFiltered(): Array<any> {
    if (!this.query) return this.pokemons;
    const lowerCaseQuery = this.query.toLowerCase();
    return this.pokemons.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
</script>

<style lang="scss">
.poke-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  justify-items: center;
  gap: 8px 8px;
  padding: 0px 8px;
}

.search {
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 0px;
  margin-bottom: 16px;
}
</style>
