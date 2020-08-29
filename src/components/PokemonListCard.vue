<template functional>
  <div class="poke-card bg-lv2">
    <router-link :to="{ name: 'Pokemon', params: { name: props.pokemon.name }}">
      <img
        v-lazy="props.pokemon.image"
        :title="`${props.pokemon.name}`"
        :alt="`A photo of the pokemon called: ${props.pokemon.name}`"
        class="poke-img"
      />
      <div class="name-container">
        <span>{{props.pokemon.name}}</span>
      </div>
    </router-link>
    <span class="pkmn-id">#{{props.pokemon.id}}</span>
  </div>
</template>

<script>
export default {
  name: "BasicTile",
  props: {
    pokemon: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
.name-container {
  text-transform: capitalize;
  font-weight: bold;
}

.poke-card {
  position: relative;
  padding: 16px;
  border-radius: 4px;
  min-height: 118px;
  min-width: 96px;
}

.pkmn-id {
  position: absolute;
  top: 8px;
  right: 8px;
  pointer-events: none;
}
</style>
