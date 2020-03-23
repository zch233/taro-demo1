import Taro, { useRouter } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function WebFrame ()  {
  const router = useRouter()
  return (
    <View>
      <WebView src={`https://shopping.kqlink.com/global-charge-wechat/${router.params.href}`} />
    </View>
  )
}
WebFrame.config = {
  navigationBarTitleText: '温馨提示'
}
