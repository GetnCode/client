import Fetchable from "../library/Fetchable";

class User{

    constructor(){
        this.fetchable = new Fetchable("http://codemeserver/api/user");
    }

    async save(siteObject, token){
        return this.fetchable.post("/create", siteObject, token);
    }

    async delete(id, token){
        return this.fetchable.post("/delete", {"id":id}, token);
    }

    async deleteAll(excluded, token){
        return this.fetchable.post("/delete/all", {
            "excluded":excluded,
        }, token);
    }

    async deleteSelected(selected, token){
        return this.fetchable.post("/delete/selected", {
            "selected":selected,
        }, token);
    }

    async update(siteObject, token){
        return this.fetchable.post("/update", siteObject, token);
    }

    async getById(id, token){
        return this.fetchable.get("/id/" + id, token);
    }

    async getAll(token){
        return this.fetchable.get("/all" , token);

    }

    async getPage(page, show=10, sortBy=null, sortDirecton=null, token){
        console.log(token);
        if(sortBy !== null){
            return this.fetchable.get("/page?page=" + page + "&show="+show+"&sort="+sortBy+"&direction="+sortDirecton, token);
        }

        else{
            return this.fetchable.get("/page?page=" + page + "&show="+show+"&sort=users.created_at&direction=desc", token);
        }
        
    }

    async search(term, token){
        return this.fetchable.get("/search/" + term, token);
    }
}

export default User;
