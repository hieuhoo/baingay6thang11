import React from "react";
import { View, Text, TextInput } from "react-native";

export default function MainInput(props) {
  const {
    title,
    value,
    onChangeText,
    placeholder,
    onEndEditing,
    secureTextEntry,
  } = props;
  return (
    <>
      <Text style={{ color: "#2FDBBC", fontWeight: "bold", marginLeft: 20 }}>
        {title}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: "#f4f4f4",
          paddingVertical: 6,
          borderRadius: 20,
          paddingHorizontal: 20,
          marginBottom: 14,
        }}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
}
