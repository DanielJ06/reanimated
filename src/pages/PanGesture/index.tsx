import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { clamp, withBouncing } from 'react-native-redash';

const { width, height } = Dimensions.get("window");

const LOGO_WIDTH = width * 0.8;
const LOGO_HEIGHT = LOGO_WIDTH * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    resizeMode: 'contain',
  }
});

const PanGesture: React.FC = () => {
  const boundX = width - LOGO_WIDTH;
  const boundY = height - LOGO_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const eventHandle = useAnimatedGestureHandler<
  PanGestureHandlerGestureEvent,
  {
    offsetX: number;
    offsetY: number;
  }
>({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX)
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY)
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withBouncing(
        withDecay({ 
          velocity: velocityX, 
        }),
        0,
        boundX
      )
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        0,
        boundY
      )
    }
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    }
  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={eventHandle} >
        <Animated.View style={[style]} >
          <Image 
            style={styles.logo} 
            source={require('../../assets/dvdLogo.png')} 
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default PanGesture;