Vue.component('search-component', Vue.extend({ 
    props:['data'],

    data: function () {
        return {
          count: 0
        }
    },
    methods: {

    },
    template: /*html*/ `
        <nav class=" bg-color-base pb-5">
            <div class="container">    
                <div class="row">
                    <div class="col">
                        <input class="form-control w-50 text-center search-component-input-text" v-on:change="filter();"  placeholder="Rick Sanc...">   
                    </div>
                </div>
            </div>
        </nav>
    `
}))