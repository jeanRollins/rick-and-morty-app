new Vue({
  el: '#app',
  data() {
    return {
      characters: [],
      textSearch : "",
      episodes : [],
      service: null
    }
  },
  methods: {
    fetch: async function (){
      this.service = new ServicesRAM();
      await this.getCharacteres();
      await this.getEpisodes();
    },
    getCharacteres: async function () {
      let chars_ = await this.service.getCharacters();
      this.characters = chars_.slice(0, 6);
    },
    getEpisodes: async function () {

      console.log("this.service :: " , this.service);
      let episodes_ = await this.service.getEpisodes();

      console.log("episodes_" , episodes_);
      this.episodes = episodes_.slice(0, 6);
    },
    filter: async function() {
      await this.getCharacteres();
      this.characters = this.characters.filter( ch =>  ch.name.toLowerCase().includes( this.textSearch ));
    } 

  },
  mounted() {
    this.fetch();
  },
  created() {
   
  }
})

