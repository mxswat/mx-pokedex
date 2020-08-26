<template>
  <div class="home">
    <h1>Welcome to MxPokedex!</h1>
    <h3>Click on any pokemon or use the search</h3>
    <!-- Apollo watched Graphql query -->
    <div v-if="$apollo.loading">Loading...</div>
    <template v-if="pokemons">
      <input type="text" id="Search" placeholder="Search..." v-debounce:300ms="debounceSearch"/>
      <div class="poke-list">
        <PokemonListCard
          :pokemon="pokemon"
          v-for="pokemon in filter(pokemons.results, searchText)"
          :key="pokemon.name"
        ></PokemonListCard>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonListCard from "@/components/PokemonListCard.vue";
import gql from "graphql-tag";

export default {
  name: "Home",
  components: {
    PokemonListCard,
  },
  data() {
    return {
      limit: 1048, //1048 is the number of pokemon now!
      searchText: "",
    };
  },
  methods: {
    debounceSearch(text) {
      this.searchText = text;
    },
    filter(source, text) {
      let result = source;
      const _text = text.toLowerCase();
      if (_text) {
        result = source.filter((pkmn) => pkmn.name.indexOf(_text) > -1);
      }
      return result;
    },
  },
  apollo: {
    pokemons: {
      query: gql`
        query pokemons($limit: Int, $offset: Int) {
          pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
              id
              url
              name
              image
            }
          }
        }
      `,
      variables: {
        limit: 1048,
      },
    },
  },
};
</script>

<style lang="scss">
.poke-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 8px 8px;
}
</style>
