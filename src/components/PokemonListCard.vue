<template functional>
  <div class="poke-card">
    <router-link :to="{ name: 'Pokemon', params: { name: props.pokemon.name }}">
      <img
        v-lazy="props.pokemon.image"
        :title="`A photo of the pokemon called: ${props.pokemon.name}`"
        class="poke-img"
      />
      <div class="name-container">
        <span>{{props.pokemon.name}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BasicTile",
  props: {
    pokemon: {
      required: true,
    }
  }
};
</script>

<style lang="scss">
.name-container {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
