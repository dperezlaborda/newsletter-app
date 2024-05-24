
<script setup lang="ts">
import { ref } from 'vue';

  const file = ref<File | null>(null);
  const fileName = ref<string>('');
  const subject = ref<string>('');
  const message = ref<string>('');
  const showModal = ref<boolean>(false);

  const handleFileUpload = (event: any) => {
    file.value = event.target.files[0];
    fileName.value = event.target.files[0].name;
  };

  const removeFile = () => {
    file.value = null;
    fileName.value = '';
  };

  const sendNewsletter = async () => {
  if (!file.value || !subject.value) {
    return;
  }
  // TODO: CONNECT API
    showModal.value = true;
  };
</script>

<template>
  <div class="p-4">
    <div class="text-md py-4">Newsletter Form</div>
    <div class="mt-4 w-1/2">
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-3">Subject</label>
      <input v-model="subject" type="text" required id="subject" name="subject" class="p-2 border rounded mb-2 py-2 w-full">
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea v-model="message" id="message" name="message" rows="3" class="p-2 border rounded mb-2 py-2 w-full"></textarea>
    </div>
    <p class="text-gray-500 mb-3">Upload a PDF or PNG image</p>
    <label class="my-10 rounded-md p-2 border-gray-300 cursor-pointer bg-blue-500 text-white">
      Select File
      <input type="file" @change="handleFileUpload" accept=".pdf, .png" class="hidden" required />
    </label>
    <div v-if="fileName" class="flex justify-between items-center mt-2">
      <p>{{ fileName }}</p>
      <button @click="removeFile" class="p-1 bg-red-500 text-white rounded">Remove</button>
    </div>
    <div class="flex justify-end p-4">
      <button 
        @click="sendNewsletter"
        :disabled="!file || !subject"
        :class="{'opacity-50': !file || !subject}"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        Send Newsletter
      </button>
    </div>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-lg text-center py-4 px-20">
          <h2 class="text-2xl mb-4">Newsletter sent successfully!</h2>
          <button @click="showModal = false" class="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
