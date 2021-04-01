<template>
    <div>
        <h1>Mock Test</h1>
        <div v-for="(item,index) in list" :key="index">
            <img :src="item.image1" alt="">
            <img :src="item.image2" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: []
        }
    },
    mounted: function() {
        axios.get('/api/mock1').then(res => {
            // console.log(res.data.datalist)
        }).catch(res => {
            alert('wrong')
        })
        axios.get('/api/mock2').then(res => {
            console.log(res.data.datalist)
            this.list = res.data.datalist.data.placeholder
        }).catch(res => {
            alert('wrong')
        })
        axios.get('api/mock3').then(res => {
            // console.log(res)
        })
        axios.get('http://mock-kids.inner.youdao.com/mock/605c510caaa1c8002a39600b/example/api/mock4', {
            params: { name: 'xwh' }
        }).then(res => {
            // console.log(res)
        })
        // axios.get('http://mock-kids.inner.youdao.com/mock/605c510caaa1c8002a39600b/example/api/mock5', {
        //     params: { age: 18 }
        // }).then(res => {
        //     console.log(res)
        // })
    }
}
</script>