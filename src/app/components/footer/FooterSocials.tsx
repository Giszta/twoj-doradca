import SocialIcon from "./SocialIcon"
import { socialLinks } from "./socialLinks"

export default function FooterSocials() {

  return (
    <div className="flex gap-5 mt-3 md:mt-0">

      {socialLinks.map((link) => (
        <SocialIcon
          key={link.href}
          link={link}
        />
      ))}

    </div>
  )

}