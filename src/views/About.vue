<template>
	<div class="about">
		<div class="section">
			<div class="title">Modes</div>
			<div class="content">
				Time: type under the selected time limit<br />
				Word: type selected amount of words<br />
				Quote: type a quote chosen for you<br />
				Tips: press tab + enter to quickly reset your test
			</div>
		</div>
		<div class="section">
			<div class="title">Race</div>
			<div class="content">
				Public room: joins a random room in which you could encounter any
				players<br />
				Private room: share the code to play with your friends
			</div>
		</div>
		<div class="section">
			<div class="title">Leaderboard</div>
			<div class="content">
				All time: display highest wpm record<br />
				Daily: display highest wpm record on that day
			</div>
		</div>
		<div class="section">
			<div class="title">Profile</div>
			<div class="content">
				See all of your records<br />
				Search for other players' stats<br />
				Export records as spreadsheet<br />
				Tips: click on the title of the record table to sort with specific field
			</div>
		</div>
		<div class="section">
			<div class="title">Theme</div>
			<div class="content">
				Select your desired theme from the setting page<br />
				Customize the theme by selecting custom and choosing your desired colors
			</div>
		</div>
		<div class="section">
			<div class="title">About</div>
			<div class="content">
				Developed by 5D Alan Leung (2020-2021) Shatin Pui Ying College<br />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
	width: 80%;
	gap: 1.5em;
	display: flex;
	align-items: center;
	margin: 1.5em auto 1.5em auto;
	flex-direction: column;
}

.section {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.title {
	font-size: 2em;
	margin-bottom: 0.1em;
	color: var(--sub-color);
}

.content {
	padding-left: 1em;
}
</style>
