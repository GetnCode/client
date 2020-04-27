import Fetchable from "../library/Fetchable";

export default
class AuthModel{

    constructor(){
        this.fetchable = new Fetchable("http://codemeserver/user");
    }

    async isAuthorized(token){
        return this.fetchable.get("/authorized", {token:token});
    }

    async authorize(attempt){
        return this.fetchable.post("/login", attempt);
    }
}