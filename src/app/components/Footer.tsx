import EmailIcon from "../../assets/icons/email.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YouTubeIcon from "../../assets/icons/youtube.svg";
import TikTokIcon from "../../assets/icons/tiktok.svg";

function getDate() {
	const today = new Date();
	return today.getFullYear();
}
export default function Footer() {
  return (
     <div className="bg-(--gray-primary) fixed bottom-0 flex w-full justify-around h-10 items-center">
			<div className="text-(--green-primary) text-xs tracking-wide font-mono hidden lg:flex">
				Copyright © {getDate()} Twoj Doradca OZE
			</div>
			<div className="socials flex flex-row gap-4 items-center">
		
				<a
					href="https://www.instagram.com/twoj.doradca.oze/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<InstagramIcon
						className="text-(--green-primary) hover:text-(--green-primary-hover) duration-500 w-5 h-5"
						alt="Instagram Icon"
					/>
				</a>
        <a
					href="https://www.youtube.com/@TwojDoradcaOZE"
					target="_blank"
					rel="noopener noreferrer"
				>
					<YouTubeIcon
						className="text-(--green-primary) hover:text-(--green-primary-hover) duration-500 w-5 h-5"
						alt="YouTube Icon"
					/>
				</a>
                <a
					href="https://www.tiktok.com/@twojdoradca?fbclid=PAZXh0bgNhZW0CMTEAAadGK6L4ZJ-uXxAxak1Pjhr9BtJaEBDg5PyjyQlKtubZBYWiLI1bYXXWVSyv3Q_aem_rh6J4BYyrxsrIh8LhaJp9Q"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TikTokIcon
						className="text-(--green-primary) hover:text-(--green-primary-hover) duration-500 w-5 h-5"
						alt="YouTube Icon"
					/>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61567533345453&ref=_xav_ig_profile_page_web#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookIcon
						className="text-(--green-primary) hover:text-(--green-primary-hover) duration-500 w-5 h-5"
						alt="Facebook Icon"
					/>
				</a>
				<a href="mailto:Kontakt@czyste-powietrze-dotacja.pl">
					<EmailIcon
						className="text-(--green-primary) hover:text-(--green-primary-hover) duration-500 w-6 h-6"
						alt="Email Icon"
					/>
				</a>
			</div>
		</div>
  );
}
