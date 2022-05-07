<template>
  <q-page class="row items-center justify-evenly">
    <q-list>
      <q-item v-for="todo in todos" :key="todo.id">
        <q-item-section><q-btn icon="edit"/></q-item-section>
        <q-item-section>
          <q-expansion-item :label="todo.title">
            <span class="description">{{ todo.description }}</span>
          </q-expansion-item>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">

import { inject, ref } from 'vue';
import { AllApi, Todo } from 'src/sdk';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const todos = ref<Todo[]>([]);

const api = inject<AllApi>('api');

api?.getAllTodos()
  .then((res) => {
    todos.value = res.data;
  })
  .catch((err) => {
    $q.notify({ type: 'negative', message: err.message });
  });
</script>
