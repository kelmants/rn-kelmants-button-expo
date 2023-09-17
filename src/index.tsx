import * as React from 'react';
import {
  Button,
  type ViewStyle,
  type ButtonProps as RNButtonProps,
} from 'react-native';

type ButtonProps = {
  color: string;
  style: ViewStyle;
} & Pick<RNButtonProps, 'onPress' | 'testID' | 'title'>;

export const ButtonView = (props: ButtonProps): JSX.Element => {
  return <Button {...props} color={props.color} title={props.title} />;
};
