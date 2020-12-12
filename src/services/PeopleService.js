export class PeopleService {
    url = 'https://swapi.dev/api/people';

    async getPeople() {
        return await fetch(this.url)
            .then(value => value.json());
    }

    async getHuman(id) {
        return await fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}