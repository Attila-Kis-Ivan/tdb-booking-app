import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenCaputuring = true) => {
  const ref = useRef();
  useEffect(
    function () {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      };
      document.addEventListener("click", handleClick, true);

      return () =>
        document.removeEventListener("click", handleClick, listenCaputuring);
    },
    [handler, listenCaputuring]
  );
  return ref;
};
