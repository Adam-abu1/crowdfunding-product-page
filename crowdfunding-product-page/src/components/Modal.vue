<template>
	<section  id="Modal">
		<div class="dark-overlay"></div>
		<div :class="[pledgeCompleted ? '' :  'pledge-incomplete']">
			<h3>Back this project</h3>
			<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
			<ModalPledge></ModalPledge>
		</div>
		<div class="pledge-completed"></div>
	</section>
</template>

<script>
import ModalPledge from '@/components/ModalPledge';

export default {
	name: 'Modal',
	components: {
		ModalPledge,
	},
	props: {
		pledges: Object,
	},
	data() {
		return {
			pledgeCompleted: false,
		};
	},
};
</script>

<style scoped>
	section {
		position: absolute;
		top: 50%;
	}
	.dark-overlay {
		height: 100vh;
		width: 100vw;
		opacity: 0.3;
		background-color: var(--black);
	}
</style>
