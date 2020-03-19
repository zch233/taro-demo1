import Taro from '@tarojs/taro'

const baseURL = process.env.NODE_ENV === 'development' ? 'https://dev.kqlink.com' : 'https://shopping.kqlink.com/global-charge-wechat-api'
// const baseURL = 'https://shopping.kqlink.com/global-charge-wechat-api'

export default function (url, data, method='POST') {
  return new Promise(resolve => {
    Taro.showLoading({ title: '加载中', mask: true })
    Taro.request({
      url: baseURL + url,
      data: {
        timestamp: Date.now(),
        value: data,
      },
      method,
      timeout: 60000,
      header: {
        'token': Taro.getStorageSync('token')
      },
      success: function (res) {
        const result = res.data
        if (result.code !== '00') {
          if (result.message) {
            Taro.showToast({ title: result.message, icon: 'none', duration: 2000 })
          } else {
            Taro.showToast({ title: '网络异常', icon: 'none', duration: 2000 })
          }
          throw Error(result.message)
        } else {
          Taro.setStorageSync('token', res.header.token)
          resolve(result)
        }
      },
      fail: function (err) {
        console.log(err, '请求失败')
        throw Error(err)
      },
      complete: function () {
        Taro.hideLoading()
      }
    })
  })
}
