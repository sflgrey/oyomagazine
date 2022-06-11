const {
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	PinterestShareButton,
	PinterestIcon,
	WhatsappShareButton,
	WhatsappIcon,
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
	ViberShareButton,
	ViberIcon,
	LinkedinShareButton,
	LinkedinIcon,
	EmailShareButton,
	EmailIcon,
} = require('react-share');

const domContainer = document.querySelector('#react-share-container');
ReactDOM.render(
	<div>
		<FacebookShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<FacebookIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</FacebookShareButton>
		<TwitterShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<TwitterIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</TwitterShareButton>
		<LinkedinShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<LinkedinIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</LinkedinShareButton>
		<EmailShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<EmailIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</EmailShareButton>
		<FacebookMessengerShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<FacebookMessengerIcon
				bgStyle={{ fill: 'rgb(39, 39, 39)' }}
				iconFillColor="white"
				size={55}
			/>
		</FacebookMessengerShareButton>
		<WhatsappShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<WhatsappIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</WhatsappShareButton>
		<ViberShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<ViberIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</ViberShareButton>
		<PinterestShareButton url={'https://wagnercenteio.github.io/oyo/'}>
			<PinterestIcon bgStyle={{ fill: 'rgb(39, 39, 39)' }} iconFillColor="white" size={55} />
		</PinterestShareButton>
	</div>,
	domContainer
);
