// index.jsx
import React from 'react'

export default class extends React.Component {
  // 获取初始的 props
  static async getInitialProps(){
    // 发送请求
    var json = await fetch("/api/time").then((resp) => resp.json())
    return {time: json.time}
  }
  render() {
    return <p>Current time is: {this.props.time}</p>
  }
}

