import React from 'react';
const Canvas = ({height, width, setter}) => {
  const canvas = React.useRef();
  setter(canvas)
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    setter(context)
  });
return (
    <canvas ref={canvas} height={height} width={width} />
  );
};
export default Canvas;