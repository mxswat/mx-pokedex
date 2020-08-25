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
            <span class="poke-id">#{{data.pokemon.id}}</span>
          </h1>
          <div class="sprites">
            <img :src="data.pokemon.sprites.front_default" alt srcset />
            <img :src="data.pokemon.sprites.back_default" alt srcset />
            <img :src="data.pokemon.sprites.front_shiny" alt srcset />
            <img :src="data.pokemon.sprites.back_shiny" alt srcset />
          </div>
          <div class="poke-detail">
            <span>Types</span>
            <div class="types">
              <span
                class="type"
                :class="type.type.name"
                v-for="type in data.pokemon.types"
                v-bind:key="type.type.name"
              >{{type.type.name}}</span>
            </div>
            <div class="abilities">
              <span>Abilities</span>
              <span
                v-for="ability in data.pokemon.abilities"
                v-bind:key="ability.ability.name"
              >{{ability.ability.name}}</span>
            </div>
            <div class="moves">
              <span>Moves</span>
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
span.type {
  padding: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 8px;
}
.types {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bug {
  color: #a8b820;
}
.dark {
  color: #705848;
}
.dragon {
  color: #7038f8;
}
.electric {
  color: #f8d030;
}
.fairy {
  color: #ee99ac;
}
.fighting {
  color: #c03028;
}
.fire {
  color: #f08030;
}
.flying {
  color: #a890f0;
}
.ghost {
  color: #705898;
}
.grass {
  color: #78c850;
}
.ground {
  color: #e0c068;
}
.ice {
  color: #98d8d8;
}
.normal {
  color: #a8a878;
}
.poison {
  color: #a040a0;
}
.psychic {
  color: #f85888;
}
.rock {
  color: #b8a038;
}
.steel {
  color: #b8b8d0;
}
.water {
  color: #6890f0;
}
</style>