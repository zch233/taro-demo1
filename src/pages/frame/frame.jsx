import Taro, { useRouter } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function WebFrame ()  {
  const router = useRouter()
  return (
    <View>
      {
        process.env.NODE_ENV === 'development' ?
        <WebView src={`https://shopping.kqlink.com/global-charge-wechat/${router.params.href}`} /> :
        <WebView src={`https://wechat.globalcharge.cn/${router.params.href}`} />
      }
    </View>
  )
}
WebFrame.config = {
  navigationBarTitleText: '温馨提示'
}
