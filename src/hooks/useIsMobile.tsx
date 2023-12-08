import useMatchMedia from "components/DesignSystem/hooks/useMatchMedia";

import { useUserDevice } from "../context/UserAgent";

const useIsMobile = () => {
  const ua = useUserDevice();

  const { sm, xs } = useMatchMedia();

  return xs || sm || ua?.isMobile;
};

export { useIsMobile };
