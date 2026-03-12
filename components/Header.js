import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { View } from 'react-native';

export default function Header() {
  return (
    <Appbar.Header>
      <View style={{ marginLeft: 10 }}>
        <Avatar.Image
          size={40}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
      </View>

      <Appbar.Content title="Hello, Jake!" subtitle="Welcome back" />
    </Appbar.Header>
  );
}