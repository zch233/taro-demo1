import Taro from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function User ()  {
  const handleMessage = e => {
    console.log(e)
  }
  return (
    <View className='user'>
      <WebView src='https://mp.weixin.qq.com/' onMessage={handleMessage} />
    </View>
  )
}
User.config = {
  navigationBarTitleText: '个人中心'
}
