import React from "react";
import { motion } from "framer-motion";

interface NavbarItemValue {
	href: string;
	title: string;
	onClick?: () => void;
}

function NavbarItem({ href, title, onClick }: NavbarItemValue) {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();

		if (onClick) onClick();

		requestAnimationFrame(() => {
			const section = document.querySelector(href);
			if (section) {
				const navbarHeight = 66;
				const sectionPosition =
					section.getBoundingClientRect().top + window.scrollY;
				const offset = 20;

				window.scrollTo({
					top: sectionPosition - navbarHeight - offset,
					behavior: "smooth",
				});
			}
		});
	};

	return (
		<motion.div
			whileHover={{ y: -3 }}
			transition={{ duration: 0.2 }}
			className="relative"
		>
			<a
				onClick={handleClick}
				href={href}
				className="block py-2 pl-3 pr-4 text-(--gray-secondary) hover:text-(--green-primary-hover) sm:text-xl rounded md:p-0 
                relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-(--green-primary-hover) after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
			>
				{title}
			</a>
		</motion.div>
	);
}

export default NavbarItem;