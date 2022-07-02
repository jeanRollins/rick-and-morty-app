
Vue.component('characters-component', {
    props:["data"],
    data: function () {
        return {
          characters: []
        } 
    },
    methods: {
        
    },
    mounted(){
        console.log("mounted::: ",this.chars);
    },
    created(){
        console.log("created::: ",this.chars);
    },
    template: /*html*/ `
        <div class="container ">
            <div class="row ">
    
                <div v-for="character in data" class="bg-color-base col-4 card text-center card-no-border my-3 " >
                <img :src="character.image" class="chacters-components-img-card zoom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                        <p class="card-text">Date created : {{ character.created}}</p>
                        
                    </div>
                </div>
            </div> 
        </div>
    `
 })