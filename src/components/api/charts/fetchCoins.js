// fetchTopCoins function that fetches chart info
import axios from 'axios';




const fetchCoins = (url) => {

    axios
        .get(url, {
                headers: {
                    Accept: 'application/json',
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            throw error;
        });
};


export default fetchCoins;