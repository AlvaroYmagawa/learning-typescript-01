import React from 'react';

interface Props{
  enable: Boolean;
}

const Button: React.FC<Props> = ({children, enable}) => {
  return (
    <button>
      {children}
    </button>
  );
}

export default Button;
