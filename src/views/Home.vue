<template>
  <v-container>
    <v-card class="mx-auto" color="#26c6da" dark>
      <v-card-title>
        <v-icon large left>
          mdi-twitter
        </v-icon>
        <span class="title font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <MessageBoard />
    <v-subheader>Calendar</v-subheader>
    <v-calendar />
    <v-subheader>How I feel</v-subheader>
    <v-row>
      <v-col v-for="n in 3" :key="n">
        <v-subheader>Someone{{ n * 10 }}</v-subheader>
        <v-progress-circular
          :size="size"
          :value="value + n * 10"
          :width="width"
          :rotate="-90"
          color="light-blue"
          >{{ value + n * 10 }}</v-progress-circular
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MessageBoard from "@/components/MessageBoard.vue";

export default {
  name: "Home",
  components: {
    MessageBoard
  },
  data: () => ({
    value: 60,
    size: 200,
    width: 40
  })
};
</script>
