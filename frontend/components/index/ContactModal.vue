<template>
  <div
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    :class="{ 'pointer-events-none': hidden, 'opacity-0': hidden ,'bg-opacity-0': hidden, 'bg-opacity-70': !hidden }"
    @click="checkOutsideClick"
    class="transition-all duration-500 ease-in-out flex bg-primary items-start justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full">
    <div class="relative w-full max-w-2xl mt-[30vh]">
      <div @click="emit('close')" class="cursor-pointer absolute z-40 right-2 top-0 text-white text-2xl">x</div>
      <!-- Modal content -->
      <div class="relative bg-slight-grey shadow text-red">
        <!-- Modal header -->
        <div v-if="$slots.header" class="flex justify-center items-center p-4  dark:border-gray-600">
          <h3 class="text-xl font-light">
            <slot name="header"></slot>
          </h3>

        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <slot></slot>
        </div>
        <!-- Modal footer -->
        <div v-if="$slots.footer" class="flex justify-between items-center p-6 space-x-2 rounded-b dark:border-gray-600">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  hidden: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])
  
const checkOutsideClick = (event: Event) => {
  event.preventDefault()
  if ((event.target as HTMLElement).getAttribute('data-modal-backdrop')) {
    emit('close')
  }
}
</script>