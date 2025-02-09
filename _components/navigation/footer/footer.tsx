import { MobileFooter } from "./mobile/mobile-footer";
import { DesktopFooter } from "./desktop/desktop-footer";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-darkGreen">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
}
