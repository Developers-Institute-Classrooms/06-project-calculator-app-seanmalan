import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OperationDisplay = ({d, h}) => {
  return (
    <View>
      <Text>OperationDisplay</Text>
      <Text>Current Calculation:</Text>
      <Text>{ d || "0" }</Text>
    </View>
  )
}

export default OperationDisplay

const styles = StyleSheet.create({})