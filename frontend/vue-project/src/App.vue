<script setup lang="ts">
import NewsletterForm from './components/NewsletterForm.vue'
import UsersList from './components/UsersList.vue'


</script>

<template>
  <header class="container mx-auto px-10 py-10">
    <h1 class="text-xl">Sending Newsletter App</h1>
  </header>
  <main>
    <div class="wrapper p-5">
      <UsersList />
      <NewsletterForm />
    </div>
  </main>
</template>
