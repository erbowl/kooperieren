<template>
  <v-row>
    <v-col cols="12" v-for="n in 10" :key="n">
      <Rule />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Rule from "@/components/Rule.vue";

export default {
  name: "Rules",
  components: {
    Rule
  }
};
</script>
