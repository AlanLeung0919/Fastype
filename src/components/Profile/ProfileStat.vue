<template>
	<div class="stat">
		<BaseStat title="avg wpm (last 10)" :val="stat.lastTenAvgWpm" />
		<BaseStat title="avg wpm" :val="stat.avgWpm" />
		<BaseStat title="avg acc" :val="stat.avgAcc">%</BaseStat>
		<BaseStat title="best wpm" :val="stat.bestWpm" />
		<BaseStat title="total race" :val="stat.totalRace" />
		<BaseStat title="total time" :val="stat.totalTime">m</BaseStat>
	</div>
</template>

<script>
import BaseStat from '@/components/Base/BaseStat';

export default {
	components: {
		BaseStat
	},
	props: {
		stat: Object
	}
};
</script>

<style scoped>
.stat {
	gap: 1em;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
}
</style>
