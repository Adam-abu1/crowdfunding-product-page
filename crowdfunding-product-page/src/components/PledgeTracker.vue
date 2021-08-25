<template>
<section class="main-card" id="PledgeTracker">
	<div class="amount-saved">
		<h2 class="current-amount-saved">${{ currentAmountSaved | stringifyNumbers}}</h2>
		<p class="target-goal">of $100,000 backed</p>
	</div>
	<div class="total-backers">
		<h2 class="current-backers">{{ totalBackers | stringifyNumbers }}</h2>
		<p>total backers</p>
	</div>
	<div class="days-left">
		<h2 class="days-left">{{ daysLeft | stringifyNumbers }}</h2>
		<p>days left</p>
	</div>
	<div class="progress-bar">sdss</div>
</section>
</template>

<script>
export default {
	name: 'PledgeTracker',
	data() {
		return {
			currentAmountSaved: 89914,
			totalBackers: 5007,
			daysLeft: 56,
		};
	},

	filters: {
		stringifyNumbers(value) {
			return value.toLocaleString();
		},
	},
};
</script>

<style scoped>
section {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 0.5fr;
}

.current-amount-saved,
.current-backers,
.days-left {
	font-weight: var(--fw-b);
}

.amount-saved, .total-backers {
	border-right: 1px solid var(--lighter-gray);
}

.progress-bar {
	grid-row-start: 2;
	grid-column: 1 / span 3;
}
</style>
