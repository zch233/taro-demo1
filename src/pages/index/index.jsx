import Taro, { useEffect } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default function Index () {

  const getPhoneNumber = (e) => {
    console.log(e)
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
    <View className='index'>11
      <Button size='mini' open-type='getPhoneNumber' bindgetphonenumber={getPhoneNumber}>按钮</Button>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
