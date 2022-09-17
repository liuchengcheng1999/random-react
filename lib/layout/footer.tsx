import React from 'react';
import {scopedClassMaker} from '../helpers/classmaker';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('gu-layout');
const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('footer', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Footer;