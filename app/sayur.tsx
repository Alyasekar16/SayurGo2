import React from 'react';
import SayurScreen from '../src/screens/SayurScreen';

export default function SayurRoute() {
  return <SayurScreen />;
}

export const options = {
  headerShown: true,
  headerTitle: 'Sayur',
  headerTintColor: '#2E7D32',
  headerStyle: {
    height: 88,
    paddingTop: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
};
