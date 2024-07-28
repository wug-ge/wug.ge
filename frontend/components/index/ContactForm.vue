<template>
  <form @submit="submit">
    <wug-input :error="emailError" type="text" placeholder="Your E-mail" name="email" v-model="email" />
    <wug-input :error="messageError" :textarea="true" type="text" placeholder="Your Message" name="message" v-model="message" />
    <button type="submit" class="bg-accent-2 text-white p-2 rounded" @click="submit">Submit</button>
    
    <div v-if="sendError || sendSuccess" class="bg-primary p-2 rounded mt-2">
      <div class="text-error">{{ sendError }}</div>
      <div class="text-accent-2">{{ sendSuccess }}</div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const email = ref('')
const message = ref('')

const emailError = ref('')
const messageError = ref('')

const sendError = ref('')
const sendSuccess = ref('')

const submit = async (event: Event) => {
  event.preventDefault()
  if (validate()) {
    const res = await sendMessage()
    if (!res.ok) {
      sendError.value = 'An error occurred while sending the message, please send me an E-Mail instead (you can find it in the footer)'
      sendSuccess.value = ''
    } else {
      sendSuccess.value = "Message sent successfully, I'll get back to you as soon as possible"
      sendError.value = ''

      email.value = ''
      message.value = ''
    }
  }
}

const sendMessage = async() => {
  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      message: message.value
    })
  })
}

const validate = () => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Check if email is empty
  if (!email.value) {
    emailError.value = 'Email is required'
    return false
  }

  // Check if email is valid
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Invalid email format'
    return false
  }

  // Clear email error if validation passes
  emailError.value = ''

  // Check if message is empty
  if (!message.value) {
    messageError.value = 'Message is required'
    return false
  }

  // Clear message error if validation passes
  messageError.value = ''
  return true
}



</script>