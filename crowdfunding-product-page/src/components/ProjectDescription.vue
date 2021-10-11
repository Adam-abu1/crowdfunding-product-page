<template>
	<main id="ProjectDescription" class="main-card">
		<h3 class="bold-weight">About this project</h3>
		<p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
			that elevates your screen to a more comfortable viewing height.
			Placing your monitor at eye level has the potential to improve your posture
			and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
		<p>
			Featuring artisan craftsmanship, the simplicity of design creates
			extra desk space below your computer to allow notepads, pens,
			and USB sticks to be stored under the stand.
		</p>
		<Pledge
			v-for="pledge in pledges"
			:key="pledge.pledgeTitle"
			:pledge-title="pledge.pledgeTitle"
			:pledges-available="pledge.pledgesAvailable"
			:pledge-cost="pledge.pledgeCost"
			:pledge-reward="pledge.pledgeReward"
		></Pledge>
	</main>
</template>

<script>
import Pledge from '@/components/Pledge';

export default {
	name: 'ProjectDescription',
	components: {
		Pledge,
	},
	data() {
		return {
			pledges: [
				{
					pledgeTitle: 'Bamboo Stand',
					pledgesAvailable: 101,
					pledgeCost: 25,
					pledgeReward: `You get an ergonomic stand made of natural bamboo.
					You've helped us launch our promotional campaign, and
					you’ll be added to a special Backer member list.`,
				},
				{
					pledgeTitle: 'Black Edition Stand',
					pledgesAvailable: 64,
					pledgeCost: 75,
					pledgeReward: `You get a Black Special Edition computer stand and a personal thank you.
					You’ll be added to our Backer member list. Shipping is included.`,
				},
				{
					pledgeTitle: 'Mahogany Special Edition',
					pledgesAvailable: 0,
					pledgeCost: 200,
					pledgeReward: `You get two Special Edition Mahogany stands, a Backer T-Shirt,
					and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
				},
			],
		};
	},
};
</script>

<style scoped>
main {
	text-align: left;
	line-height: var(--line-height);
	display: grid;
}

p {
	font-size: 0.9rem;
}
</style>
