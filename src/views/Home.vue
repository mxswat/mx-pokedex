<template>
  <div class="home">
    <h1>Welcome to MxPokedex!</h1>
    <h3>Click on any pokemon or use the search</h3>
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('../graphql/PokemonHome.gql')" :variables="{ limit }">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo poke-list">
          {{ data.pokemons.results.length }}
          <PokemonListCard :pokemon="pokemon" v-for="pokemon in data.pokemons.results" :key="pokemon.id"></PokemonListCard>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonListCard from "@/components/PokemonListCard.vue";

export default {
  name: "Home",
  components: {
    PokemonListCard,
  },
  data() {
    return {
      limit: 1050, //1048 is the number of pokemon now!
    };
  },
};
</script>
