<template>
    <ul>
		<li v-for="book in books.docs" v-bind:key="book._id" >
			<span>{{ book.name }}</span>
		</li>
	</ul>
</template>

<script>
export default {

    props: {
		
		books: {}
			
},

}
</script>

<style>

</style>
