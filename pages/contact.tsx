import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import stylesContact from "../styles/Contact.module.css";

interface contactFormContents {
	Name?: string;
	Email?: string;
	Message?: string;
}

const about = () => {
	const [contactForm, setContactForm] = React.useState<contactFormContents>({});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		alert(JSON.stringify(contactForm));
		setContactForm({});
	};

	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name='description' content='Generated by create next app' />
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main>
				<div className={"main-whole-page-container " + styles.whole_about_page}>
					<section className={styles.about_page_first_section}>
						<div className={styles.about_page_width_restriction_container}>
							<div className={styles.pageTitleContainer}>
								<h2 className={styles.pageTitle}>Contact us</h2>
								<p className='front-page-section-caps-smaller-message'>
									Want to join the team ? Problem with the website? Tell us!
								</p>
							</div>

							<div className={styles.MainBlockContainer}>
								<form onSubmit={handleSubmit} className={stylesContact.formContainer}>
									<label className={stylesContact.label}>Name</label>
									<input
										type='text'
										className={stylesContact.formEmailAndName}
										value={contactForm.Name}
										onChange={(event) => {
											setContactForm((prev) => {
												prev["Name"] = event.target.value;
												return prev;
											});
										}}
									/>
									<label className={stylesContact.label}>Email</label>
									<input
										type='email'
										className={stylesContact.formEmailAndName}
										value={contactForm.Name}
										onChange={(event) => {
											setContactForm((prev) => {
												prev["Email"] = event.target.value;
												return prev;
											});
										}}
									/>
									<label className={stylesContact.label}>Message</label>
									<textarea
										value={contactForm.Name}
										className={stylesContact.formMessage}
										maxLength={500}
										onChange={(event) => {
											setContactForm((prev) => {
												prev["Message"] = event.target.value;
												return prev;
											});
										}}
									/>

									<input
										className={"front-page-section-donation-button " + stylesContact.submitButton}
										type='submit'
										value='Submit'
									/>
								</form>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};


export default about;
