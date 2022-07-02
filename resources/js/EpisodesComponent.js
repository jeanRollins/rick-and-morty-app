Vue.component('episodes-component', Vue.extend({ 
    props:['data'],

    data: function () {
        return {
          count: 0
        }
    },
    methods: {

    },
    template: /*html*/ `
        <div class="bg-color-primary">
            <div class="container  bg-color-primary">
                <div class="row ">
        
                    <div v-for="character in data" class="bg-color-base col-4 card text-center card-no-border my-3 bg-color-primary p-5" >
                    <img :src="'resources/img/rick-and-morty-gf2b629e09_1920.jpg'" class="zoom p-3 img-border-radius" alt="...">
                        <div class="card-body ">
                            <h5 class="card-title text-white">{{ character.name }}</h5>
                            <p class="card-text text-white">Date created : {{ character.created}}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
    `
}))