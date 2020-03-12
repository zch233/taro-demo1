import Taro from '@tarojs/taro'

const baseURL = process.env.NODE_ENV === 'development' ? 'https://qnjf7tri-kumquat.mock.coding.io' : ''

export default function (url, data, method='POST') {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: baseURL + url,
      data,
      method,
      timeout: 60000,
      header: {
        'X-Coding-Mock-Token': 'ti09fzxgdifojdc0fohkqrebk2etup7d'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        console.log(err, 1)
        reject(err)
      }
    })
  })
}
