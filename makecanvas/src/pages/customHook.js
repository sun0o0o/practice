import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import UseDidMountEffect from '../components/UseDidMountEffect';

const CustomHook = () => {
  const [state, setState] = useState(1);

  // UseDidMountEffect(() => {
  //   console.log('처음엔 렌더링 되면 안됌..근데 왜 나와');
  // }, [state.key]);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('렌더링 되지좀마');
  });

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
};

export default CustomHook;
