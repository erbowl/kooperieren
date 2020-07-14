<template>
  <v-main>
    <v-row v-for="n in 10" :key="n">
      <v-col>
        <Recipe />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// @ is an alias to /src
import Recipe from "@/components/Recipe.vue";

export default {
  name: "Menu",
  components: {
    Recipe
  }
};
</script>
