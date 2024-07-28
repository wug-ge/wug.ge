<template>
  <div class="relative my-2">
    <textarea
      v-if="textarea"
      class="px-2 py-3 rounded w-full"
      :disabled="props.disabled"
      :value="modelValue"
      @input="emitInput"
    ></textarea>
    <input
      v-else
      class="px-2 py-3 rounded w-full"
      :type="type"
      :disabled="props.disabled"
      :value="modelValue"
      @input="emitInput"
    />
    <label :class="{ 'input-has-value': modelValue.length }" class="absolute top-3 left-2 transition-all">{{ props.placeholder }}</label>
    <span class="absolute w-full left-1 bottom-0 !text-error text-sm">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  textarea: { type: Boolean, default: false },
  placeholder: { type: String, default: ''},
  disabled: { type: Boolean, default: false},
  type: { type: String, default: 'text' },
  modelValue: { default: '' },
  error: { type: String, default: ''},
})

const emit = defineEmits<{
  'update:modelValue': [value: string] 
}>()

const emitInput = (e: Event) => {
  const target = e.target as HTMLInputElement 
  if (!target) {
    return
  }
  emit('update:modelValue', target.value)
}


</script>

<style lang="scss" scoped>
input, textarea {
  color: black;
}
label {
  @apply text-accent-2;
  &.input-has-value {
    @apply top-0 text-[10px];
  }
}
</style>