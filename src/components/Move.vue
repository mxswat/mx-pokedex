<template>
  <div class="move">
    <div class="main">
      <span class="name">{{move.response.names[7].name}}</span>
      <span class="type-label ml-a" :class="move.response.type.name">{{move.response.type.name}}</span>
    </div>
    <input class="css-dropdown" :id="`check ${move.response.name}`" type="checkbox" name="menu" />
    <label class="css-dropdown" :for="`check ${move.response.name}`">
      More info
      <div class="arrow-down"></div>
    </label>
    <div class="info">
      <span class="desc"> {{move.response.effect_entries[0].effect}}</span>
      <span>PP: {{move.response.pp}}</span>
      <span>Accuracy: {{move.response.accuracy || 'none'}}</span>
      <span>Power: {{move.response.power || 'none'}}</span>
      <span>Priority: {{move.response.priority || 'none'}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class Move extends Vue {
  @Prop() private move!: string;
}
</script>

<style lang="scss" scoped>
@import "../style/types.scss";
@import "../style/common.scss";
.move {
  padding: 8px;
  .main {
    display: flex;
  }
}
.name {
  display: inline-block;
  line-height: 33px;
  font-weight: bold;
}
.info {
  display: none;
  span {
    margin-top: 8px;
    text-align: left;
  }
  .desc {
    // Take full row
    grid-column: 1 / -1;
  }
}

input.css-dropdown {
  display: none;
  &:checked {
    ~ div.info {
      // display: flex;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
    }
    ~ label .arrow-down {
      transform: rotate(180deg);
    }
  }
}

label.css-dropdown {
  padding: 8px;
  display: flex;
  cursor: pointer;
}

.arrow-down {
  height: 14px;
  width: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' fill='white' height='10' role='presentation' class='vs__open-indicator'%3E%3Cpath d='M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  margin-left: auto;
  background-position: bottom;
  transition: transform 300ms;
}
</style>