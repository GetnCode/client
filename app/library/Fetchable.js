
export default class Fetchable{

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get(url = '', token) {
        if(url.includes("?")){
            url += "&api_token=" + token;
        }

        else{
            url += "?api_token=" + token;
        }
        const response = await fetch(this.baseUrl + url);

        return await response.json(); // parses JSON response into native JavaScript objects
    }

    async post(url = '', data = {}, token) {
        // Default options are marked with *
        const response = await fetch(this.baseUrl + url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': 'Bearer '.  token,
            'Content-Type': 'application/json',
            'Accept':'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        return await response.json(); // parses JSON response into native JavaScript objects
    }
}
