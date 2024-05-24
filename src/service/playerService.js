import axios from 'axios';

const PLAYER_BASE_URL_API ='http://localhost:8080/api/players'

class playerService{
    createPlayer(player)
    {
        return axios.post(PLAYER_BASE_URL_API,player);
    }
}
const playerServiceInstance = new playerService();

export default playerServiceInstance;
