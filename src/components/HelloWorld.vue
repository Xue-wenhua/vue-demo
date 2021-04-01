<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="fuzzySearch()">模糊搜索</el-button>
    <el-button @click="mockTest()">mock假数据</el-button>
    <el-button @click="routerPractice()">路由</el-button>
    <el-button @click="deepCopy()">深拷贝</el-button>
    <el-button @click="introduction()">vue基础</el-button>
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
    },
    mockTest () {
      this.$router.push({ name: 'mockTest' })
    },
    routerPractice () {
      this.$router.push({ name: 'routerPractice' })
    },
    deepCopy () {
      this.$router.push({ name: 'deepCopy' })
    },
    introduction() {
      this.$router.push({ name: 'introduction' })
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
