class APIusers {
    constructor() {
        this.endpoint = `https://664cc57dede9a2b556518f19.mockapi.io`;
    }

    async get() {
        let response = await fetch(this.endpoint + '/users');
        let data = await response.json()
        localStorage.setItem("data2", JSON.stringify(data))
        
    }

    async create(data) {
        let response = await fetch(this.endpoint + `/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        //await response.json();
    }

    async delete(id) {
        let response = await fetch(this.endpoint + `/users/${id}`, {
            method: 'DELETE'
        });

        await response.json();
    }

    async edit(id, messages) {
        let response = await fetch(this.endpoint + `/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: messages
            })
        });

        await response.json();
    }
    
}
class APIcart {
    constructor() {
        this.endpoint = `https://664cc57dede9a2b556518f19.mockapi.io`;
    }

    async get() {
        let response = await fetch(this.endpoint + '/cart');
        let data = await response.json()
        localStorage.setItem("data", JSON.stringify(data))
    }

    async create(data) {
        let response = await fetch(this.endpoint + `/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        //await response.json();
    }

    async delete(id) {
        let response = await fetch(this.endpoint + `/cart/${id}`, {
            method: 'DELETE'
        });

        await response.json();
    }

    async edit(id, messages) {
        let response = await fetch(this.endpoint + `/cart/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: messages
            })
        });

        await response.json();
    }
    
}
let Users = new APIusers();
let Cart = new APIcart();