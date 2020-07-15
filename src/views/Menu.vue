<template>
  <v-container>
    <v-text-field
      solo
      label="What you want to eat?"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-row>
      <v-col v-for="n in 10" :key="n">
        <Recipe />
      </v-col>
      <v-btn fixed dark fab bottom right color="pink">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </v-container>
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
