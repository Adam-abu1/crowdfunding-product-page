<template>
<section class="main-card" id="PledgeTracker">
	<div class="amount-saved">
		<span class="current-amount-saved">$89,914</span>
		<p class="target-goal">of $100,000 backed</p>
	</div>
	<div class="total-backers">
		<span class="current-backers">5,007</span>
		<p>total backers</p>
	</div>
	<div class="days-left">
		<span class="days-left"></span>
		<p>days left</p>
	</div>
	<div class="progress-bar"></div>
</section>
</template>

<script>
export default {
	name: 'PledgeTracker',
	data() {
		return {
			currentAmountSaved: 89914,
		};
	},
};
</script>

<style scoped>

</style>
