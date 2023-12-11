import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../redux/DataSlice';

export const DataComponent = () => {
  const dispatchAction = useDispatch()
  const data = useSelector(state => state)
  console.log("Data " + JSON.stringify(data))
  const callAPI = () => {
    dispatchAction(api())
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} onPress={() =>  callAPI()}>Call API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold'
  }
});