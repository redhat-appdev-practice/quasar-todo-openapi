<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          DEVOXX Todo OpenAPI
        </q-toolbar-title>

        <span class="user_name">{{ name }}</span>
        <q-avatar><img :src="avatar"></q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import { inject, ref } from 'vue';
import { AllApi } from 'src/sdk';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const api = inject<AllApi>('api');

const avatar = ref<string|undefined>('');
const name = ref<string|undefined>('');

api?.getCurrentUser()
  .then((res) => {
    avatar.value = res.data.avatar;
    name.value = res.data.name;
  })
  .catch((err) => {
    $q.notify({ message: err.message, type: 'negative' });
  });
</script>
<style lang="sass">
.user_name
  color: $secondary
  margin-right: 0.4rem
.q-toolbar__title
  color: $secondary
</style>
