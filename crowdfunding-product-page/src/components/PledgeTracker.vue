<template>
<main class="main-card" id="PledgeTracker">
	<div class="amount-saved">
		<span class="current-amount-saved"></span>
		<p class="target-goal"></p>
	</div>
	<div class="total-backers">
		<span class="current-backers"></span>
		<p>total backers</p>
	</div>
	<div class="days-left">
		<span class="days-left"></span>
		<p>days left</p>
	</div>
	<div class="progress-bar"></div>
</main>
</template>

<script>
export default {
	name: 'PledgeTracker',
};
</script>

<style scoped>

</style>
