<template>
    <div>
        <button @click="get">get LOTR books json data</button>
			<button @click="data=[]">clear</button>
			<books :books="data"></books>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    

    data: function(){
		
		return {
			
				data: []
			
		}
		
    },
    
    methods: {
		
		get(){
			
			var _this = this
			
			axios.get('https://the-one-api.herokuapp.com/v1/book'
				
			)
			.catch(function (error) {
			
			console.log(error)
				
			})
			.then(	function( data ) {
                
                 _this.data = data.data
                    
			})
			
		},
		
    },
    
    components:{

        'books': require('./components/books.vue').default
    }

}
</script>

<style>

</style>
