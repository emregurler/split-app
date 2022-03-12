import { useEffect } from 'react';

// returns true if any click is not on the given elements
function useOutsideClick(refList, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      let isAnyElementClicked = false;
      for (let i = 0; i < refList.length; i += 1) {
        const ref = refList[i];
        if (ref.current && ref.current.contains(event.target)) {
          isAnyElementClicked = true;
        }
      }

      if (!isAnyElementClicked && callback) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refList, callback]);
}

export { useOutsideClick };
