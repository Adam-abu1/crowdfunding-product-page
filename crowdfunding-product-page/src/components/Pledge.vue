<template>
	<section class="pledge" :class="{ outOfStock: !aboveZeroPledges }">
		<h3 class="pledge-title">{{ PledgeTitle }}</h3>
		<p class="pledge-cost">Pledge ${{ PledgeCost }} or more</p>
		<p class=" pledge-reward">{{ PledgeReward }}</p>
		<p class="pledges-available">
			<span class="number-of-pledges-left">{{ PledgesAvailable }}</span>
			left</p>
		<button class="reward-select" :class="{ unavailable: !aboveZeroPledges }">
			{{ rewardButtonText }}
		</button>
	</section>
</template>

<script>
export default {
	name: 'Pledge',
	props: {
		PledgeTitle: {
			type: String,
			required: true,
		},
		PledgesAvailable: {
			type: Number,
			required: true,
		},
		PledgeCost: {
			type: Number,
			required: true,
		},
		PledgeReward: {
			type: String,
			required: true,
		},
	},
	computed: {
		aboveZeroPledges() {
			return this.PledgesAvailable > 0;
		},
		rewardButtonText() {
			return this.aboveZeroPledges ? 'Select Reward' : 'Out of stock';
		},
	},
};
</script>

<style scoped>
section {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	border: 1px solid var(--lighter-gray);
	border-radius: var(--card-border-radius);
	padding: 1em 2em;
	margin: 4vh 0;
}

.outOfStock {
	opacity: 0.5;
}

h3.pledge-title {
	grid-row-start: 1;
	grid-column: 1 / span 2;
}

.pledge-cost {
	grid-row-start: 1;
	grid-column-start: 2;
	text-align: right;
}

.pledge-reward {
	grid-row-start: 2;
	grid-column: 1 / span 2;
}

.pledges-available {
	grid-row-start: 3;
	grid-column: 1 / span 2;
}

.pledges-available span {
	font-weight: var(--fw-b);
	font-size: 2rem;
	color: var(--black);
}

.reward-select {
	grid-row-start: 3;
	grid-column-start: 2;
	width: clamp(130px, 12vw, 180px);
	height: clamp(35px, 2em, 50px);
	margin: 0;
}

.pledge-cost {
	color: var(--moderate-cyan);
}
.reward-select:hover {
	transition: background-color 500ms linear;
	background-color: var(--dark-cyan);
}

.unavailable, .unavailable:hover {
	background-color: var(--dark-gray);
	cursor: not-allowed;
}
</style>
