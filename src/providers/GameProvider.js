import axios from './AxiosSetup'

class GameProvider{

    findGame(id){
        const URL = "/api/game/" + id
        return axios.get(URL)
    }

    fetchGames(){
        const URL = "/api/game/"
        return axios.get(URL)
    }


    createGame(data){
        const URL = "/api/game/"
        return axios.post(URL,data)
    }

    updateGame(id,data){
        const URL = "/api/game/" + id
        return axios.put(URL,data)
    }

}


export default new GameProvider()
