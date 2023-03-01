<script setup lang="ts">

import {useRouter} from "vue-router";
import {useNotification} from "@kyvg/vue3-notification";

const router = useRouter();

const {notify} = useNotification();
</script>

<template>
  This is a home page
  <button @click="router.push({name: 'about'})">Go about</button>
  <button @click="notify({title: 'hi', message:'hi'})">Notify</button>
</template>

<style scoped>

</style>