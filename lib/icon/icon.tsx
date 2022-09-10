
import React from 'react';
import './importIcons';
import './icon.scss';
import classnames from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...setProps}) => {
    return (
      <svg className={classnames('random-react-icon', className)}
           {...setProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;