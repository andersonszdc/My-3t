import { useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useState(() => {
    setMounted(true);

    return () => setMounted(false);
  });
  return mounted
    ? createPortal(
        children,
        document.getElementById("portal1") as HTMLDivElement
      )
    : null;
};

export default Portal;
