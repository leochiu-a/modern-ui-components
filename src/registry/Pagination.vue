<script setup lang="ts">
import { computed } from "vue";

const currentPage = defineModel<number>();
const { pageSize = 15, total = 0 } = defineProps<{
  pageSize?: number;
  /** Total number of data items */
  total?: number;
}>();

console.log(total)
const totalPages = computed(() => {
  return Math.ceil(total / pageSize);
});

const pages = computed(() => {
  const pages = [];
  const currentPageValue = currentPage.value ?? 0;
  const totalPageValue = totalPages.value;

  let startPage = currentPageValue < 4 ? 1 : currentPageValue - 2;
  let endPage = startPage + 4;
  endPage = endPage > totalPageValue ? totalPageValue : endPage;
  const diff = startPage - endPage + 4;
  startPage -= startPage - diff > 0 ? diff : 0;

  if (startPage > 1) {
    pages.push(1);
  }

  if (startPage > 2) {
    pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPageValue - 1) {
    pages.push("...");
  }

  if (endPage < totalPageValue) {
    pages.push(totalPageValue);
  }

  return pages;
});

const changePage = (page: number | string) => {
  if (typeof page !== "string" && currentPage.value !== page) {
    currentPage.value = page;
  }
};
const prevPage = () => {
  if (currentPage.value && currentPage.value > 1) {
    currentPage.value -= 1;
  }
};
const nextPage = () => {
  if (currentPage.value && currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};
</script>

<template>
  <div
    class="mb-[20px] flex items-center justify-center *:font-semibold *:text-txt-base"
  >
    <div
      class="is-active group join justify-center gap-2 *:h-[28px] *:min-h-0 *:w-[28px] *:rounded-full! *:border-0 *:px-[0px] *:py-[0px] *:shadow-none"
    >
      <button
        :class="[
          'btn join-item bg-light-gray',
          {
            'cursor-not-allowed opacity-20 hover:bg-light-gray':
              currentPage === 1,
          },
          {
            'hover:bg-wave-gray hover:text-white': currentPage !== 1,
          },
        ]"
        @click="prevPage"
      >
        &lt;
      </button>
      <button
        v-for="page in pages"
        :key="page"
        :class="[
          'btn join-item bg-light-gray hover:bg-wave-gray hover:text-white',
          {
            'group-[.is-active]:bg-main-400 group-[.is-active]:text-white':
              currentPage === page,
          },
        ]"
        :disabled="page === '...'"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        :class="[
          'btn join-item bg-light-gray',
          {
            'cursor-not-allowed opacity-20 hover:bg-light-gray':
              currentPage === totalPages,
          },
          {
            'hover:bg-wave-gray hover:text-white': currentPage !== totalPages,
          },
        ]"
        @click="nextPage"
      >
        &gt;
      </button>
    </div>

    <div class="ml-[10px] flex h-[28px] items-center gap-2">
      <div class="text-sm font-semibold">{{ currentPage }}</div>
      <div class="text-sm font-semibold text-txt-amount-blank">/</div>
      <div class="text-sm font-semibold text-txt-amount-blank">
        {{ totalPages }}
      </div>
    </div>
  </div>
</template>
