<template>
	<div id="app">
		<NavBar/>
		<TitleCard/>
		<PledgeTracker/>
		<ProjectDescription/>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import TitleCard from '@/components/TitleCard';
import PledgeTracker from '@/components/PledgeTracker';
import ProjectDescription from '@/components/ProjectDescription';

export default {
	name: 'App',
	components: {
		NavBar,
		TitleCard,
		PledgeTracker,
		ProjectDescription,
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
	background-image: url('./assets/images/image-hero-desktop.jpg');
	background-repeat:no-repeat;
	background-color: #f8f8f8;
	margin: 0;
}

p {
	color: #7a7a7a;
	font-weight: 400;
	font-size: 0.9rem;
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

.main-card {
	background-color: #FFFFFF;
	border-radius: 5px;
	padding: 1.5em;
	margin: 0 19%;
}

button {
	margin: 1em 5em;
	border-radius: 21px;
	background-color: #74c2bd;
	border: none;
	font-weight: 700;
	color: #FFFFFF;
}
</style>
