import React, { memo } from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

const CustomStatusBar = ({
  backgroundColor = '#000',
  barStyle = 'light-content',
  translucent = false,
  containerStyle,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        { height: insets.top, backgroundColor: backgroundColor },
        containerStyle,
      ]}
    >
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        {...props}
      />
    </View>
  );
};

export default memo(CustomStatusBar);
