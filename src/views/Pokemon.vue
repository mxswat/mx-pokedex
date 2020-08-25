<template>
  <div class="pokemon-detail">
    <ApolloQuery :query="require('../graphql/Pokemon.gql')" :variables="{ name }">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo pokemon">
          <h1 class="capitalize">
            {{data.pokemon.name}}
            <span class="poke-id">id: {{data.pokemon.id}}</span>
          </h1>
          <div class="poke-detail">
            <h2>Types</h2>
            <div class="types">
              <span
                v-for="type in data.pokemon.types"
                v-bind:key="type.type.name"
              >{{type.type.name}}</span>
            </div>
            <div class="abilities">
              <span
                v-for="ability in data.pokemon.abilities"
                v-bind:key="ability.ability.name"
              >{{ability.ability.name}}</span>
            </div>
            <div class="moves">
              <span
                v-for="move in data.pokemon.moves"
                v-bind:key="move.move.name"
              >{{move.move.name}}</span>
            </div>
          </div>
        </div>
        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  created() {
    this.name = this.$route.params.name;
  },
  data() {
    return {
      name: null,
      pokemon: null,
      result: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.poke-id {
  font-size: 20px;
}
</style>