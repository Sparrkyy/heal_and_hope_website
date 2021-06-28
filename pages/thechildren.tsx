import Head from "next/head";
import React, { FC, JSXElementConstructor } from "react";
import { MainPageBlockProps } from "../types/types";
import { MainPageBlock } from "../components/MainPageBlock";
import styles from "../styles/About.module.css";
import stylesTheChildren from "../styles/TheChildren.module.css";

const about = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className={"main-whole-page-container " + styles.whole_about_page}>
					<section className={styles.about_page_first_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={styles.pageTitle}>The Children</h2>
								<p className='front-page-section-caps-smaller-message'>The stories of those we have and hope to help</p>
							</div>

							<div className={styles.MainBlockContainer}>
								<MainPageBlock
									imageID={stylesTheChildren.childImageID}
									containerID=''
									header='First Name'
									mainText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
									imageSource='/ChildrenDefaultphoto.jpeg'
									imageAlt='Picture Of Child'
								/>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

const OldAboutPage: FC = () => {
	return null;
	// <div className='sub-main-whole-page-container'>
	// 	<BannerAndContent>
	// 		<TitleBanner title='About Us' subtitle='Heal and Hope chapters and functioning' />
	// 		<MainPageBlock
	// 			containerID='firstMainPageBlock'
	// 			header='McGill University Chapter'
	// 			mainText='It all started from a single club at mcgill, but then it blousemed into something much bigger. We here at heal and hope strive to do important work the best we can. Across the globe.'
	// 			imageSource='/McgillLogo.png'
	// 			imageAlt='Heal And Hope Logo'
	// 			buttonText={undefined}
	// 		/>
	// 	</BannerAndContent>
	// 	<BannerAndContent>
	// 		<TitleBanner title='Partnership logistics' subtitle='How we work with The Children Of War Foundation' />
	// 		<img alt='diagram of partnership flow' src='/PartnershipLogs-removebg.png' className='sub-page-large-image' />
	// 	</BannerAndContent>
	// </div>
};

const PositionCard: FC<{ Name: string; Position: string; ProfileImage?: string }> = ({
	Name,
	Position,
	ProfileImage,
}) => {
	return (
		<div className={styles.PositionCard}>
			<img src={ProfileImage} alt='Profile Image' className={styles.PositionCardImage} />
			<div className={styles.PositionCardText}>
				<h3>{Name}</h3>
				<p>{Position}</p>
			</div>
		</div>
	);
};

// const BannerAndContent = ({ children }: { children?: React.ReactNode }) => {
// 	return <div className='sub-page-banner-and-content'>{children}</div>;
// };

// const PageFooter = () => {
// 	return (
// 		<footer>
// 			<a className='footer-trademark' href='#'>
// 				Copyright © 2021 heal and hope | www.healandhope.net | All Rights Reserved{" "}
// 			</a>
// 			<p className='footer-email'>healandhopewebmaster@gmail.com</p>
// 		</footer>
// 	);
// };

// const TitleBanner = ({ title, subtitle }: { title: string; subtitle: string }) => {
// 	return (
// 		<div className='sub-page-title-banner-container'>
// 			<h2 className='sub-page-title'>{title}</h2>
// 			{subtitle && <p className='sub-page-sub-title'>{subtitle}</p>}
// 		</div>
// 	);
// };

export default about;
