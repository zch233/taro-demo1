import Taro, { useRouter } from '@tarojs/taro'
import { View, WebView  } from '@tarojs/components'

export default function WebFrame ()  {
  const router = useRouter()
  console.log(process.env)

  return (
    <View>
      <WebView src={`${WEBVIEW_URL}/${router.params.href}`} />
    </View>
  )
}
WebFrame.config = {
  navigationBarTitleText: '温馨提示'
}
