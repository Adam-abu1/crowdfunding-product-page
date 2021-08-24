<template>
	<section class="main-card" id="TitleCard">
		<h2 class="bold-weight header-text">Mastercraft Bamboo Monitor Riser</h2>
		<p>
			A beautiful & handcrafted monitor stand to reduce neck and eye strain.
		</p>
		<button>Back this project</button>
		<button>
			<span class="bookmark-icon"></span>
			Bookmark
		</button>
	</section>
</template>

<script>
export default {
	name: 'TitleCard',
};
</script>

<style scoped>
section {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
}

h2 {
	grid-row-start: 1;
	grid-column: 1/ span 2;
}

p {
	grid-row-start: 2;
	grid-column: 1/ span 2;
}

button {
	grid-row-start: 3;

}
</style>
