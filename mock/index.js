import Mock from 'mockjs'

import mockTestAPI from './mocktest'

Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.mock(/\/mocktest\/mockpost/, 'post', mockTestAPI.mockpost)
Mock.mock(/\/mocktest\/mockget/, 'get', mockTestAPI.mockget)
