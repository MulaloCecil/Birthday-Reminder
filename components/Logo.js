import React, { Component } from 'react';
import { View, Image } from 'react-native';

const Logo = () => (
  <View
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Image
      source={require('../assets/logo.png')}
      style={{ width: 150, height: 150 }}
    />
  </View>
);

export default Logo;