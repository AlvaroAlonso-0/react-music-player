import axios from 'axios';

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "0c4e26940c9148099bdd0ea44994d577";
const redirectURI = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer "+token;
        return config;
    });
};

export default apiClient;