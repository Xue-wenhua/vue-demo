const Mock = require('mockjs')

export default {
    datalist: () => {
        const list = Mock.mock({
            "string|5": [
                {
                    "string1|1-10": '小明',
                    "string2|4": '哈'
                }
            ],
            "number|5": [
                {
                    "count1|+1": 18,
                    "count2|1-100": 2,
                    "count3|111.3": 2,
                    "count4|111.1-3": 1,
                    "count5|1-100.3": 1,
                    "count6|1-100.2-4": 1
                }
            ],
            "boolean|6": [
                {
                    "b1|1": true,
                    "b2|2-4": true 
                }
            ],
            "object|5": [
                {
                    "obj1|3": { a: 10, b: 20, c: 30, d: 40, e: 50 },
                    "obj2|1-5": { a: 10, b: 20, c: 30, d: 40, e: 50 }
                }
            ],
            "array|7": [
                {
                    "arr1|3": [ 'a','b','c','d','e' ],
                    "arr2|1-3": [ 'a','b','c','d','e' ],
                    "arr3|1": [ 'a','b','c','d','e' ],
                    "arr4|+1": [ 'a','b','c','d','e' ]
                }
            ],
            "function": {
                    "func": function() { return 1+3 }
            },
            "RegExp|5": [
                {
                    "reg1": /[a-z][A-Z][0-9]/,
                    "reg2": /\d{1,5}/
                }
            ]
        })
        return {
            code: 20000,
            data: list
        }
    }
}
