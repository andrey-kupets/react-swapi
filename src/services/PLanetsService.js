export class PLanetsService {
    url = 'https://swapi.dev/api/planets';

    async getPlanets() {
        return await fetch(this.url).then(value => value.json());
    }

    async getOnePlanet(id) {
        return await fetch(this.url + `/${id}`).then(value => value.json());
    }
}