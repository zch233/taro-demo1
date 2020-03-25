import Taro, { useEffect, useRouter } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'
import JWT from 'jsonwebtoken'
import SHA1 from 'sha1'
import * as api from './api.js'

export default function Share ()  {
  const router = useRouter()
  useEffect(() => {
    !router.params.get && Taro.login({
      success: async function (res) {
        if (res.code) {
          const { result } = await api.login(res.code)
          if (!result) {
            Taro.redirectTo({ url: '/pages/vip/vip' })
          }
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }, [])

  return (
    <View>
      <WebView src={`https://shopping.kqlink.com/global-charge-wechat/user/share-poster?userkey=${Taro.getStorageSync('token') && SHA1(JWT.decode(Taro.getStorageSync('token')).openId) || 'default'}`} />
    </View>
  )
}
Share.config = {
  navigationBarTitleText: '专属二维码',
}
