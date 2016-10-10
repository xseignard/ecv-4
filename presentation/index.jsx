import React from 'react';
import {
	Deck,
	Heading,
	Image,
	ListItem,
	List,
	Slide,
	Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import exams from '../assets/exams.gif';

preloader({
	exams,
});

const theme = createTheme({
	primary: '#303F9F',
	green: '#8BC34A',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="green">
					Ceci n'est pas un cours!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Image src={exams} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="green">
					On révise les deux cours précédents
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="green">
					C'est par là!
				</Heading>
				<List textColor="white">
					<ListItem>
						<a className="link" href="http://xseignard.github.io/ecv-2" target="_blank" rel="noopener noreferrer">Cours n°2</a>
					</ListItem>
					<ListItem>
						<a className="link" href="http://xseignard.github.io/ecv-3" target="_blank" rel="noopener noreferrer">Cours n°3</a>
					</ListItem>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
