import FooterCopyright from "./FooterCopyright"
import FooterTagline from "./FooterTagline"
import FooterSocials from "./FooterSocials"

export default function FooterContainer() {

  return (
    <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white/70 backdrop-blur-lg rounded-lg shadow-lg px-6 py-4 mt-2">

      <FooterCopyright />

      <FooterTagline />

      <FooterSocials />

    </div>
  )

}