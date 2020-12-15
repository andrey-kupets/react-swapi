export class StarshipsService {

    url = 'https://swapi.dev/api/starships';

    async getStarships() {
        return await fetch(this.url).then(value => value.json());
    }

     getOneStarship(id) {
        console.log((this.url + '/' + id+'/'));
        return fetch(this.url + '/' + id+'/').then(value => {
            if(value.status === 200){
                return value.json().then(message=> {
                    return {error: false, message}
                })
            }else{

                return value.json().then(message=> {
                    return {error: true, message}
                })
            }

        });
    }
}
