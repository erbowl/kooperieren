<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" color="#26c6da" dark>
          <v-card-title>
            <v-icon large left>
              mdi-comment-quote-outline
            </v-icon>
            <span class="title font-weight-light">Today's word</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <MessageBoard />
    <v-subheader>Calendar</v-subheader>
    <v-calendar />
    <v-subheader>How we feel</v-subheader>
    <v-row>
      <v-col v-for="n in 3" :key="n" align="center">
        <h4 class="text-center">Someone{{ n * 10 }}</h4>
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
    <p class="text-center">2020/07/17 13:52</p>
  </v-container>
</template>

<script>
import MessageBoard from "@/components/MessageBoard.vue";

export default {
  name: "Home",
  components: {
    MessageBoard,
  },
  data: () => ({
    value: 60,
    size: 200,
    width: 40,
  }),
  methods: {},
};
</script>
