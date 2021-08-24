<template>
<nav id="NavBar">
	<h2 class="bold-weight">crowdfund</h2>
	<ul>
		<li
			v-for="navLink in navLinks"
			:key="navLink.title"
			:href="navLink.url">
			{{ navLink.title }}
		</li>
	</ul>
</nav>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			navLinks: [
				{ title: 'About', url: '#' },
				{ title: 'Discover', url: '#' },
				{ title: 'Get Started', url: '#' },
			],
		};
	},
};
</script>

<style scoped>
nav {
	margin-bottom: 10em;
	display: flex;
	justify-content: space-between;
	color: #FFF;
}

ul {
	display: flex;
	justify-content: space-between;
	padding: 0;
}
li {
	list-style-type: none;
	padding: 0 0.7em;
	display: inherit;
	align-items: center;
}
</style>
