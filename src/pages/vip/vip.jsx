import Taro from '@tarojs/taro'
import { View, Button, Image, OfficialAccount } from '@tarojs/components'
import logo from '../../static/logo.png'
import './vip.scss'
import * as api from './api.js'

export default function Index () {
  const getPhoneNumber = async (e) => {
    const phoneData = e.detail
    if (phoneData.errMsg === 'getPhoneNumber:ok') {
      await api.createMember({ encryptedData: phoneData.encryptedData, ivStr: phoneData.iv })
      Taro.showToast({
        title: '领取成功',
        icon: 'success',
        duration: 1500
      }).then(() => {
        Taro.redirectTo({ url: '/pages/index/index?get=1' })
      })
    } else {
      Taro.showToast({ title: '授权失败', icon: 'none', duration: 2000 })
      return
    }
  }
  const onLoadHandler = e => {
    console.log(e)
  }

  return (
    <View className='index'>
      <Image style='width: 36%;' src={logo} mode='widthFix'></Image>
      <View className='index-title'>会员领卡</View>
      <View className='index-tips'>领取会员卡可成为游全球会员，享受积分消费，兑换优惠券</View>
      <Button className='index-button' openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>微信手机号快速申请</Button>
      <View style='margin-top: 3vh;'><OfficialAccount onLoad={onLoadHandler} onError={onLoadHandler} /></View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '游全球会员活动',
}
