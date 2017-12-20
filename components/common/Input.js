import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    // alignSelf: 'space-between',
    width:300,
    borderWidth:1,
    height:50,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    fontWeight:'bold',
  },
  containerStyle: {
   height:100,
   justifyContent:'center', 
   alignSelf:'center', 
   marginTop:10,
   marginBottom:10,
   backgroundColor: '#F8F8F8',
  }
};

export { Input };
