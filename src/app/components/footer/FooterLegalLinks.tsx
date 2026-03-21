import Link from "next/link";

const legalLinks = [
  {
    href: "/terms",
    label: "Regulamin",
  },
  {
    href: "/privacyPolicy",
    label: "Polityka prywatności",
  },
  {
    href: "/socialMediaPolicy",
    label: "Polityka social media",
  },
];

export default function FooterLegalLinks() {
  return (
    <nav
      aria-label="Linki prawne"
      className="flex flex-col items-center gap-10 text-center sm:flex-row sm:flex-wrap sm:justify-center"
    >
      {legalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-gray-600 transition-colors hover:text-blue-600 underline-offset-4 hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}