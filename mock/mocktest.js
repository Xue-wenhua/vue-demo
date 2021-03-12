import Mock from 'mock'

export default {
    //mock的post数据
    mockpost: () => {
        const mockposts = Mock.mock({
            "retcode": "测试post",
            "retdesc": "测试post",
            "data|5": [{

            }]
        })
        return {
            code:20000,
            data: mockposts
        }
    },
    //mock的get数据
    mockget: () => {
        const mockgets = Mock.mock({
            "retcode": "测试get",
            "retdesc": "测试get",
            "data|5": [{

            }]
        })
        return {
            code: 20000,
            data: mockgets
        }
    }
}