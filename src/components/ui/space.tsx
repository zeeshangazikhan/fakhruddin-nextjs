import React from 'react';

type SpaceProps = {
  height?: number | string;
  className?: string;
};

const Space: React.FC<SpaceProps> = ({ height = 80, className = '' }) => {
  const style: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
  };
  return <div className={`tp-space ${className}`} style={style} />;
};

export default Space;
