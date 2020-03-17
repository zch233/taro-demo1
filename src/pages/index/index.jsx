import Taro, { useEffect, useShareAppMessage } from '@tarojs/taro'
import { View, Button, Image, OfficialAccount } from '@tarojs/components'
import logo from '../../static/logo.png'
import qrcode from '../../static/qrcode.jpg'
import './index.scss'
import * as api from './api.js'

export default function Index () {
  const getPhoneNumber = async (e) => {
    const phoneData = e.detail
    if (phoneData.errMsg === 'getPhoneNumber:ok') {
      await api.createMember({ encryptedData: phoneData.encryptedData, ivStr: phoneData.iv })
      Taro.showToast({
        title: '领取成功',
        icon: 'success',
        duration: 2000,
        success () {
          Taro.navigateTo({ url: '/pages/user/user?id=1' })
        }
      })
    } else {
      Taro.showToast({ title: '授权失败', icon: 'none', duration: 2000 })
      return
    }
  }
  const onLoadHandler = e => {
    console.log(e)
  }
  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '游全球',
      path: 'pages/user/user',
      imageUrl: qrcode
    }
  })

  useEffect(() => {
    Taro.login({
      success: async function (res) {
        if (res.code) {
          const { result } = await api.login(res.code)
          if (result) {
            Taro.showToast({ title: '你是会员', icon: 'none', duration: 2000 })
          } else {
            Taro.showToast({ title: '获得申请资格', icon: 'none', duration: 2000 })
          }
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }, [])

  return (
    <View className='index'>
      <Image style='width: 36%;' src={logo} mode='widthFix'></Image>
      <View className='index-title'>会员领卡</View>
      <View className='index-tips'>领取会员卡可成为游全球会员，享受积分消费，兑换优惠券</View>
      <Button className='index-button' openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>微信手机号快速申请</Button>
      <OfficialAccount onLoad={onLoadHandler} onError={onLoadHandler} />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '游全球会员活动',
}
