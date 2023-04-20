import { useEffect, useState } from "react";

export default function useActive() {
  const [active, setActive] = useState(false);
  const body = document.querySelector("body");

  function toggleOverflow() {
    if (active) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  function toggleState() {
    setActive(!active);
  }

  function disabled() {
    setActive(false);
  }

  useEffect(() => {
    toggleOverflow();
  }, [active]);

  return {
    active,
    toggleState,
    disabled,
  };
}
