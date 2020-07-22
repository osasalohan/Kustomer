import React from 'react';
import Jumbotron from './Jumbotron';
import CategoryList from './CategoryList';
import HomeAndGarden from './HomeAndGarden';
import BeautyServices from './BeautyServices';
import WeddingAndEvents from './WeddingAndEvents';
import Reviews from './Reviews';
import SecondaryJumbotron from './SecondaryJumbotron';
import Footer from './Footer';

const HomePage = (props) => (
	<div>
		<Jumbotron />
		<CategoryList />
		<HomeAndGarden />
		<BeautyServices />
		<WeddingAndEvents />
		<Reviews />
		<SecondaryJumbotron />
		<Footer />
	</div>
);

export default HomePage;