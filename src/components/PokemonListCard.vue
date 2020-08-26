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

<script>
export default {
  name: "PokemonListCard",
  props: ["pokemon"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    // console.log("this.pokemon", this.pokemon);
  },
};
</script>

<style lang="scss">
.name-container {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
