import axios from 'axios';
import { people, imagesBaseURL } from '../../constants/api';
import { 
    PLAYER_FETCH,
    PLAYER_IMAGE_LOAD 
} from '../../constants/actionTypes';

const fetchPlayerData = (query) => (
    { 
        type: PLAYER_FETCH, 
        payload: { 
            request: { 
                url: `${people}${query}` 
            } 
        } 
    }
);

const fetchPlayerImage = (image) => (
    { 
        type: PLAYER_IMAGE_LOAD, 
        payload: { 
           image
        } 
    }
)

const doFetchPlayer = (query) => {
    return async (dispatch, getState) => {
        await dispatch(fetchPlayerData(query))

        let { player } = getState();
        let id = player.id;

        axios.get(`${imagesBaseURL}${id}.jpg`, { responseType: 'arraybuffer' })
        .then(response =>
            dispatch(
                fetchPlayerImage( new Buffer(response.data, 'binary').toString('base64') )
            )
        )
    }
}

export default doFetchPlayer;