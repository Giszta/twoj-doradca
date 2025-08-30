import React from "react";
import NavbarItem from "./NavbarItem";

type Link = {
	path: string;
	title: string;
};

type MenuOverlayProps = {
	links: Link[];
	onItemClick: () => void;
};

const MenuOverlay = React.memo(({ links, onItemClick }: MenuOverlayProps) => {
	return (
		<ul
			className="flex flex-col py-4 items-center"
			aria-label="Menu nawigacyjne"
		>
			{links.map((link) => (
				<li key={link.path}>
					<NavbarItem
						href={link.path}
						title={link.title}
						onClick={onItemClick}
					/>
				</li>
			))}
		</ul>
	);
});

MenuOverlay.displayName = "MenuOverlay";

export default MenuOverlay;