<template>
	<div class="submit-form">
		<div v-if="!submitted">
			<div class="form-group">
				<label for="title">Title</label>
				<input
								type="text"
								class="form-control"
								id="title"
								required
								v-model="tutorial.title"
								name="title"
				/>
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<input
								class="form-control"
								id="description"
								required
								v-model="tutorial.description"
								name="description"
				/>
			</div>

			<button @click="saveTutorial" class="btn btn-success">Submit</button>
		</div>

		<div v-else>
			<h4>You submitted successfully!</h4>
			<button class="btn btn-success" @click="newTutorial">Add</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AddTutorial",

		data() {
			return {
				tutorial: {
					id: null,
					title: "",
					description: "",
					published: false
				},
				submitted: false
			};
		},
	}
</script>

<style scoped>

</style>