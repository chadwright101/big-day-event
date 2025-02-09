import { MobileFooter } from "./mobile/mobile-footer";
import { DesktopFooter } from "./desktop/desktop-footer";

export function Footer() {
  return (
    <footer>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
}
