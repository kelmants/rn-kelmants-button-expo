import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
  type ButtonProps as RNButtonProps,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-kelmants-button-expo' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ButtonProps = {
  color: string;
  style: ViewStyle;
} & Pick<RNButtonProps, 'onPress' | 'testID' | 'title'>;

const ComponentName = 'ButtonView';

export const ButtonView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ButtonProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
