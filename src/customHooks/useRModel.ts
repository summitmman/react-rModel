import { useState, useRef } from 'react';

export interface IRModel<T> {
  value: T;
  state: T;
}

const useRModel = <T>(initialValue: T): IRModel<T> => {
  const [v, setV] = useState(initialValue);
  const ref = useRef(initialValue);

  return {
    get value() {
      return ref.current;
    },
    set value(v: T) {
      ref.current = v;
      setV(v);
    },
    state: v,
  };
};

export default useRModel;
