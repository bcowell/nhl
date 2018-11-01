import { teams, imagesBaseURL } from '../../constants/api';
import { TEAM_FETCH, PLAYER_IMAGE_LOAD } from '../../constants/actionTypes';
import axios from 'axios';

const fetchTeam = (query) => (
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
        type: PLAYER_IMAGE_LOAD, 
        payload: { 
           images
        } 
    }
)

const doFetchTeam = (query) => {
    return async (dispatch, getState) => {

        const roster = getState().roster;
        console.log(roster)
        try {
            const getTeam = await dispatch(fetchTeam(query));

            let images = [];

            const getImages = Promise.all(
                (roster || []).map(p => {
                    let id = p.person.id;
                    return axios.get(`${imagesBaseURL}${id}.jpg`, { responseType: 'arraybuffer' })
                    .then(response =>
                        images.push({ "id": id, "base64Image": new Buffer(response.data, 'binary').toString('base64') })
                    )
                })
            )
            Promise.all([getTeam, getImages]).then(images => {
                console.log(JSON.stringify(images))
                dispatch(loadImages(images));
            });
        } catch (e) {}
    }
}

export default doFetchTeam;