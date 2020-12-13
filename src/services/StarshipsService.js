export class StarshipsService {

    url = 'https://swapi.dev/api/starships';

    async getStarships() {
        return await fetch(this.url).then(value => value.json());
    }

    async getOneStarship(id) {
        return await fetch(this.url + `/${id}`).then(value => value.json());
    }
}