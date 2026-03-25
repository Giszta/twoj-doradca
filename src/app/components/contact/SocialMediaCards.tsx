"use client";

import { contacts } from "./socialData";
import SocialCard from "./SocialCard";

export default function SocialMediaCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
      {contacts.map((contact, index) => (
        <SocialCard key={contact.id} contact={contact} index={index} />
      ))}
    </div>
  );
}