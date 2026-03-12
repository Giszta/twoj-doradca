import Image from "next/image"
import { Contact } from "./types"

type Props = {
  contact: Contact
  priority?: boolean
}

export default function SocialIcon({ contact, priority }: Props) {
  return (
    <div className="relative mb-4">
      <div
        className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-20 blur-lg rounded-full`}
      />

      <Image
        src={contact.img}
        alt={contact.alt}
        width={64}
        height={64}
        sizes="64px"
        priority={priority}
        className="relative drop-shadow-lg transition-transform group-hover:scale-105 duration-200"
      />
    </div>
  )
}