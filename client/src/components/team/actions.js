import { teams, imagesBaseURL } from '../../constants/api';
import { TEAM_FETCH, PLAYER_IMAGE } from '../../constants/actionTypes';
import axios from 'axios';

const fetchFromQuery = (query) => (
    { 
        type: TEAM_FETCH, 
        payload: { 
            request: { 
                url: `${teams}${query}` 
            } 
        } 
    }
);

const loadImages = (images) => (
    { 
        type: PLAYER_IMAGE, 
        payload: { 
           images
        } 
    }
)

const doFetchTeam = (query) => {
    return dispatch => {
        dispatch(fetchFromQuery(query)).then(res => {
            console.log(res.payload.data.teams[0].roster.roster)
            let images = {};
            let data = res.payload.data.teams[0].roster.roster;

            (data || []).map(p => {
                let id = p.person.id;

                return axios.get(`${imagesBaseURL}${id}.jpg`, { responseType: 'arraybuffer' })
                .then(response => {
                    let image = new Buffer(response.data, 'binary').toString('base64');
                    images[id] = image;
                })
            });

            dispatch(loadImages(images));
        })
    }
}

export default doFetchTeam;