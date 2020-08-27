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
            <div class="sprite-container" v-for="(sprite, index) in sprites" v-bind:key="index">
              <img :src="data.pokemon.sprites[sprite]" alt />
            </div>
          </div>
          <div class="types-container">
            <span class="label">Types:</span>
            <div class="types">
              <span
                class="type-label"
                :class="type.type.name"
                v-for="type in data.pokemon.types"
                v-bind:key="type.type.name"
              >{{type.type.name}}</span>
            </div>
          </div>
          <div class="abilities-container">
            <div class="abilities">
              <span class="label">Abilities:</span>
              <span
                class="ability"
                v-for="ability in data.pokemon.abilities"
                v-bind:key="ability.ability.name"
              >{{ability.ability.name}}</span>
            </div>
          </div>
          <div class="moves-container">
            <div class="moves">
              <span class="moves-title">Moves</span>
              <div class="moves-list">
                <ApolloQuery
                  v-for="move in data.pokemon.moves"
                  v-bind:key="move.move.name"
                  :query="require('../graphql/Move.gql')"
                  :variables="{ move: move.move.name }"
                  class="move-wrap"
                >
                  <template slot-scope="{ result: { loading, error, data } }">
                    <!-- Loading -->
                    <template v-if="loading" class="loading apollo">Loading...</template>
                    <!-- Error -->
                    <template v-else-if="error" class="error apollo">An error occured</template>
                    <!-- Result -->
                    <template v-else-if="data" class="result apollo">
                      <Move :move="data.move"></Move>
                    </template>
                    <!-- No result -->
                    <template v-else class="no-result apollo">No result :(</template>
                  </template>
                </ApolloQuery>
              </div>
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
import Move from "@/components/Move.vue";
export default {
  name: "Pokemon",
  created() {
    this.name = this.$route.params.name;
  },
  components: {
    Move,
  },
  data() {
    return {
      name: null,
      pokemon: null,
      result: null,
      sprites: ["front_default", "back_default", "front_shiny", "back_shiny"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/types.scss";
@import "../style/variables.scss";

.poke-id {
  font-size: 20px;
}

.types-container,
.abilities-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  .label {
    font-weight: bold;
    text-transform: uppercase;
    line-height: 34px;
  }

  .type {
    padding: 8px 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0px 8px;
  }
  .types {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.ability {
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 8px;
}

.moves-title {
  font-weight: bold;
  text-transform: uppercase;
  line-height: 34px;
}

.sprites {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 150px));
  justify-items: center;
  justify-content: center;
  gap: 8px 8px;
  margin-bottom: 16px;
}

.moves-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 8px 8px;
  padding: 16px;
}

.move-wrap {
  background: $bg-lv2;
  width: 100%;
  border-radius: 4px;
}
</style>