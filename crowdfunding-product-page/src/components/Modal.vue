<template>
	<section  id="Modal">
		<div :class="[pledgeCompleted ? '' :  'pledge-incomplete', 'main-card']">
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
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		background-color: rgba(0,0,0,0.5);;
		display: grid;
		place-content: center;
	}

	.main-card {
		margin: 0;
	}
</style>
