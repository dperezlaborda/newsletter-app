<script setup lang="ts">
import { ref, computed } from 'vue';
import IconTrash from './icons/IconTrash.vue';

  const newEmail = ref('');
  const emails = ref<string[]>(['email1@example.com', 'email2@example.com']);
  const displayedEmails = computed(() => emails.value.slice(-5));

  const addEmail = () => {
    emails.value.push(newEmail.value);
    newEmail.value = '';
  };

  const submitEmails = async () => {
    await fetch('http://localhost:3000/newsletter/add-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ emails: emails.value })
    });
    emails.value = [];
  };

  const deleteEmail = (index: number) => {
    if (window.confirm('Do you want to remove this email from the list?')) {
      emails.value.splice(index, 1);
    }
  };

</script>

<template>
  <div class="p-4">
    <input 
      type="email" 
      v-model="newEmail"
      @keyup.enter="addEmail"
      class="p-2 border rounded mb-2 w-full py-4"
      placeholder="Enter email addresses, separated by commas..."
    />
    <div class="flex justify-center mt-4">
      <button 
        @click="submitEmails"
        :disabled="newEmail === ''"
        :class="{'opacity-50': newEmail === ''}"
        class="p-2 bg-blue-500 text-white rounded w-auto py-4 px-8"
      >
        Submit
      </button>
    </div>
    <ul class="mt-4">
      <li 
        v-for="(email, index) in displayedEmails" 
        :key="index" 
        class="p-2 border-b flex justify-between items-center"
      >
        {{ email }}
        <IconTrash @click="deleteEmail(index)" class="cursor-pointer" />
      </li>
    </ul>
  </div>
</template>
