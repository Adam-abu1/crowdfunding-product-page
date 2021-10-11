<template>
	<div id="app">
		<NavBar/>
		<TitleCard/>
		<PledgeTracker/>
		<ProjectDescription/>
		<Modal/>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import TitleCard from '@/components/TitleCard';
import PledgeTracker from '@/components/PledgeTracker';
import ProjectDescription from '@/components/ProjectDescription';
import Modal from '@/components/Modal';

export default {
	name: 'App',
	components: {
		NavBar,
		TitleCard,
		PledgeTracker,
		ProjectDescription,
		Modal,
	},
};
</script>

<style>
@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Black.ttf') format('truetype');
	font-weight: 900;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-ExtraBold.ttf') format('truetype');
	font-weight: 800;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Bold.ttf') format('truetype');
	font-weight: 700;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-SemiBold.ttf') format('truetype');
	font-weight: 600;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Medium.ttf') format('truetype');
	font-weight: 500;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Regular.ttf') format('truetype');
	font-weight: 400;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Light.ttf') format('truetype');
	font-weight: 300;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-ExtraLight.ttf') format('truetype');
	font-weight: 200;
}

@font-face {
	font-family: Commissioner;
	src: url('./assets/fonts/Commissioner-Thin.ttf') format('truetype');
	font-weight: 100;
}

body {
	font-family: Commissioner, sans-serif;
	font-size: 16px;
	background-image: url('./assets/images/image-hero-desktop.jpg');
	background-repeat:no-repeat;
	background-color: #f8f8f8;
	margin: 0;
}

p {
	color: #7a7a7a;
	font-weight: var(--fw-n);
	font-size: 0.9rem;
	line-height: var(--line-height);
}

#app {
	font-family: Commissioner, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000;
	margin: 2em 10vw;
	display: flex;
	flex-direction: column;
	row-gap: 2em;
}

:root {
	--moderate-cyan: #74c2bd;
	--dark-cyan: #147B74;
	--dark-gray: #7A7A7A;
	--lighter-gray: #e8e2e2;
	--black: #000;
	--white: #FFF;

	--fw-n: 400;
	--fw-m: 500;
	--fw-b: 700;

	--mobile-breakpoint: 375px;
	--desktop-max: 1440px;

	--button-border-radius: 21px;
	--card-border-radius: 5px;

	--line-height:  1.7;
}

.main-card {
	background-color: #FFFFFF;
	border-radius: var(--card-border-radius);
	padding: 1.5em 3em;
	margin: 0 19%;
}

button {
	margin: 1em 5em;
	border-radius: var(--button-border-radius);
	background-color: var(--moderate-cyan);
	border: none;
	font-weight: var(--fw-b);
	color: var(--white);
}
</style>
