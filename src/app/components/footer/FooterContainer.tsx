import FooterCopyright from "./FooterCopyright";
import FooterTagline from "./FooterTagline";
import FooterSocials from "./FooterSocials";
import FooterLegalLinks from "./FooterLegalLinks";
import FooterCookieSettingsButton from "./FooterCookieSettingsButton";

export default function FooterContainer() {
  return (
    <div className="w-[92%] mx-auto bg-white/70 backdrop-blur-lg rounded-lg shadow-lg px-6 py-5 mt-2">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <FooterCopyright />
        <FooterTagline />
        <FooterSocials />
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4 flex flex-col items-center gap-3">
        <FooterLegalLinks />
        <FooterCookieSettingsButton />
      </div>
    </div>
  );
}