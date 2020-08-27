<template>
  <div class="poke-card">
    <router-link :to="{ name: 'Pokemon', params: { name: pokemon.name }}">
      <img
        :src="pokemon.image"
        :title="`A photo of the pokemon called: ${pokemon.name}`"
        class="poke-img"
      />
      <div class="name-container">
        <span>{{pokemon.name}}</span>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class PokemonListCard extends Vue {
  @Prop() private pokemon!: string;
}
</script>

<style lang="scss">
.name-container {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
