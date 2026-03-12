import React from 'react';
import { Button } from 'react-native-paper';

export default function ActionButton({ icon, label }) {
  return (
    <Button
      icon={icon}
      mode="contained"
      style={{
        margin: 5,
        flex: 1
      }}
    >
      {label}
    </Button>
  );
}