class ServicesRAM {

    url = "https://rickandmortyapi.com/api/" ;

    async getCharacters() {
        try {
            let {results} = await this.request({ url : `${this.url}character`} ) ;
            if( results ==  undefined ) return [] ;
            results = results.map( r => ({ 
                name: r.name,
                image: r.image,
                created: this.getDayFormart( new Date(r.created) ),
             }) );
            return results ;
                
        } catch (error) {
            console.log("Error to get characters.");
        }
    }

    async getEpisodes() {
        const url = `${this.url}episode` ;

        console.log("url :: ", url);
        try {
            let {results} = await this.request({ url } ) ;
            if( results ==  undefined ) return [] ;
            results = results.map( e => ({ 
                id: e.id,
                name: `${e.episode} - ${e.name}` ,
                file: e.characters[0] !== undefined ? e.characters[0] : "",
                created: this.getDayFormart( new Date( "2017-11-10T12:56:34.129Z") ),
             }) );
            return results ;
                
        } catch (error) {
            console.log("Error to get episodes.");
        }
    }

    getDayFormart( date ){
        const day = date.getDate() > 9 ? date.getDate() : ("0" + date.getDate() );
        const month = date.getMonth() > 9 ? date.getMonth() : ("0" + date.getMonth()) ;
        return day + "-" +  month + "-" + date.getFullYear();
    }
    async request( { url } ){
        
        const response = await fetch( url );
        const results  = await response.json();
        
        if( response.status === 200 ){
            return results ;
        }
        return false ;
    };
} ;
