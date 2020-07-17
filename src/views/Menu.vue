<template>
  <v-container>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="text-center">
              <p><v-icon left>mdi-chef-hat</v-icon>Recipe Queue</p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row dense>
                <v-col cols="12" v-for="i in [1, 2, 3, 4]" :key="i">
                  <v-card color="#385F73" dark width="300" class="mx-auto">
                    <v-img
                      src="https://picsum.photos/510/300?random"
                      aspect-ratio="1.7"
                    ></v-img>

                    <v-card-title class="headline">
                      Unlimited music now
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          solo
          label="What you want to eat?"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
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
