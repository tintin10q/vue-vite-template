<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
  This is an about page
  <button @click="router.push({name: 'home'})">Go home</button>
</template>

<style scoped>

</style>