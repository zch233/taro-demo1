import Taro from '@tarojs/taro'

const baseURL = process.env.NODE_ENV === 'development' ? 'https://dev.kqlink.com' : ''

export default function (url, data, method='POST') {
  return new Promise((resolve, reject) => {
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
          reject('网络错误')
        } else {
          Taro.setStorageSync('token', res.header.token)
          resolve(result)
        }
      },
      fail: function (err) {
        console.log(err, '请求失败')
        reject(err)
      }
    })
  })
}
