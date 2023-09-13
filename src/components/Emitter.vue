<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "Emitter",

    methods: { 
      emitEvent() {
        this.$emit("myEvent", "name", "password")
        this.$emit("myEvent", "age", "23")
        this.$emit("anotherEvent", "name", "password")
      }
    }
  }
</script>

<style scoped>
</style>