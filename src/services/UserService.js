import axios  from "axios";

class UserService{
    static getAllUsers(){
        let serverUrl = `https://jsonplaceholder.typicode.com/users`;
        return axios.get(serverUrl);
    }
}
export default UserService;