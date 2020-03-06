import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user.scss'

export default class User extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='user'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
