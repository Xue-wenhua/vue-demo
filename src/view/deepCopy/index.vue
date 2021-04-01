<template>
    <div>
        <h3>深拷贝</h3>
        <el-button type="primary" @click="handleDeepClone">深拷贝</el-button>
    </div>
</template>
<script>
export default {
    name: "deepCopy",
    data() {
        return {
            obj: {
                id: 1,
                name: 'xwh',
                age: 18,
                city: [
                    {
                        name: 'beijing',
                        time: '2020-01-01'
                    },
                    {
                        name: 'shanghai',
                        time: '2021-01-01'
                    }
                ]
            }
        }
    },
    methods: {
        handleDeepClone() {
            const map = new Map()
            function deepClone(obj) {
                let result = null
                let keys = Object.keys(obj),
                key = null,
                value = null
                value = map.get(obj)
                if (value) {
                    return value
                }
                result = obj instanceof Array ? [] : {}
                map.set(obj, result)
                for (let i = 0; i < keys.length; i++) {
                    key = keys[i]
                    value = obj[key]
                    console.log(value)
                    if (value && typeof value === 'object') {
                        result[key] = deepClone(value)
                    } else {
                        result[key] = value
                    }
                }
                return result
            }
            let objx = deepClone(this.obj)
            console.log(objx)
        }
    }
}
</script>