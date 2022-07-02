Vue.component('header-component', Vue.extend({ 
    props:["title"],
    data: function () {
        return {
          count: 0
        }
    },
    template: /*html*/ `
        <nav class=" bg-color-base py-5">
            <div class="container  ">    
                <div class="row  ">
                    <div class="col  ">
                        <h1 class="text-center" href="#"> {{ title }}</h1>
                    </div>
                </div>
            </div>
        </nav>
    `
}))