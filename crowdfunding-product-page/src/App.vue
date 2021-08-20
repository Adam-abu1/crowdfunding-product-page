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
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
