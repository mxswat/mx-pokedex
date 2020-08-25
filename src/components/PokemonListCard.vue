<template>
  <div class="poke-card">
    <img src alt srcset />
  </div>
</template>

<script>
export default {
  name: "PokemonListCard",
  props: ["pokemon"],
  components: {},
  data() {
      return {}
  },
  methods: {},
  created() {
    console.log("this.pokemon", this.pokemon);
  },
};
</script>
