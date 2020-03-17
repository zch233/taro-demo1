import Taro from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function User ()  {
  const handleMessage = e => {
    console.log(e)
  }

  return (
    <View className='user'>
      <WebView src='https://shopping.kqlink.com/global-charge-wechat/home' onMessage={handleMessage} />
    </View>
  )
}
User.config = {
  navigationBarTitleText: '专属二维码'
}
