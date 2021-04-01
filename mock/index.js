import Mock from 'mockjs'

import mock1API from './mock1'
import mock2API from './mock2'

Mock.mock('/api/mock1', 'get', mock1API)
Mock.mock('/api/mock2', 'get', mock2API)

export default Mock