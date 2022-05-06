<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          DEVOXX Todo OpenAPI
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass">
.user_name
  color: $secondary
  margin-right: 0.4rem
.q-toolbar__title
  color: $secondary
</style>
