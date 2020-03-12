import Taro, { useRouter } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function User ()  {
  const handleMessage = e => {
    console.log(e)
  }
  const router = useRouter()
  console.log(router)
 
  return (
    <View className='user'>
      <WebView src='https://shopping.kqlink.com/qrtest/qr.html' onMessage={handleMessage} />
    </View>
  )
}
User.config = {
  navigationBarTitleText: '个人中心'
}
