<script setup lang="ts">
import { ref } from "vue";

const dialogRef = ref();

const showDialog = () => {
  dialogRef.value.showModal();
};

const closeDialog = () => {
  dialogRef.value.close();
};

/**
 * Close a dialog when click on backdrop
 */
const closeByClickingBackdrop = (event: Event) => {
  if (event.target === dialogRef.value) {
    dialogRef.value.close();
  }
};
</script>

<template>
  <button id="openDialog" @click="showDialog">打開對話框</button>

  <dialog class="dialog" ref="dialogRef" @click="closeByClickingBackdrop">
    <div class="dialog-container">
      <p>Primitive html dialog</p>
      <button @click="closeDialog">close</button>
    </div>
  </dialog>
</template>

<style scoped>
/* dialog close styles  */

.dialog {
  transition: opacity 500ms ease-out, display 600ms, overlay 600ms;
  transition-behavior: allow-discrete;
  opacity: 0;
}

.dialog::backdrop {
  opacity: 0;
  background-color: #0008;
  transition: opacity 500ms ease-out, display 600ms allow-discrete;
}

/* dialog open styles */

.dialog[open] {
  opacity: 1;

  @starting-style {
    opacity: 0;
  }
}

.dialog[open]::backdrop {
  background-color: #0008;
  opacity: 1;

  @starting-style {
    opacity: 0;
  }
}

/* styles */

.dialog {
  border: none;
  padding: 0;
  margin: auto;
  border-radius: 8px;
}

.dialog-container {
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
