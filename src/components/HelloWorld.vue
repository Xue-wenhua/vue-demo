<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="fuzzySearch()">模糊搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue Demo'
    }
  },
  methods: {
    fuzzySearch () {
      this.$router.push({ name: 'fuzzySearch' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
