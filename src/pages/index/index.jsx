import Taro, { useEffect } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import logo from '../../static/logo.png'
import './index.scss'

export default function Index () {

  const getPhoneNumber = (e) => {
    console.log(e.detail)
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      Taro.showToast({ title: '领取成功', icon: 'success', duration: 2000, success () {
        Taro.navigateTo({ url: '/pages/user/user' })
      } })
    } else {
      Taro.showToast({ title: '授权失败', icon: 'none', duration: 2000 })
      return
    }
  }

  useEffect(() => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          console.log(res)
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
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '游全球会员活动'
}
