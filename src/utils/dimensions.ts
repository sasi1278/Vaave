import { Dimensions } from 'react-native';

interface ScreenDimensions {
  width: number;
  height: number;
}

const { width: screenWidth, height: screenHeight }: ScreenDimensions = Dimensions.get('window');

export {screenWidth,screenHeight}
