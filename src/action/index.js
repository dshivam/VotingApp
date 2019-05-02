export const GET_ALL_POLLS = 'GET_ALL_POLLS';
export const GET_POLL_RESULT = 'GET_POLL_RESULT';
export const GET_POLLs_BY_USER = 'GET_POLLs_BY_USER';
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const ADD_NEW_POLL = 'ADD_NEW_POLL';
export const RESET_NEWPOLLSTATUS_STATE = 'RESET_NEWPOLLSTATUS_STATE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


function getAllPolls(json) {
return {
    type: GET_ALL_POLLS,
    data: json
};
}

function getPollDetails(json) {
    return {
        type: GET_POLL_RESULT,
        data: json
    };
}

function updateVote(json) {
    return {
        type: UPDATE_VOTE,
        data: json
    };
    }
function getPollsByUser(json) {
    return {
        type: GET_POLLs_BY_USER,
        data: json
    };
}

function createNewPoll(json) {
    return {
        type: ADD_NEW_POLL,
        data: json
    };
}

export function loginAction(user) {
    return {
        type: LOGIN,
        data: user
    };
}
export function logoutAction() {
    return {
        type: LOGOUT,
        data: ''
    };
}
export function resetLatestPollStatus() {
    return {
        type: RESET_NEWPOLLSTATUS_STATE,
        data: undefined
    }
}

export function fetchAllPolls(url) {
return (dispatch) => {
    return fetch(url,{mode: 'cors'})
    .then(
        response => response.json(),
        error => console.log('error occured ' + error)
    )
    .then((json) => {
     dispatch(getAllPolls(json));
    });
};
}

export function fetchPollDetails(url) {
    return (dispatch) => {
        return fetch(url,{mode: 'cors'})
        .then(
            response => response.json(),
            error => console.log('error occured ' + error)
        )
        .then((json) => {
         dispatch(getPollDetails(json));
        });
    };
}

export function fetchUpdatedPolls(url, requestBody) {
    return (dispatch) => {
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(
            response => response.json(),
            error => console.log('error occured ' + error)
        )
        .then((json) => {
            console.log('fetched data ');
         dispatch(updateVote(json));
        });
    }
}

export function fetchPollDetailsByUser(url) {
    return (dispatch) => {
        return fetch(url,{mode: 'cors'})
        .then(
            response => response.json(),
            error => console.log('error occured ' + error)
        )
        .then((json) => {
         dispatch(getPollsByUser(json));
        });
    };
}

export function createPoll(url, requestBody) {
    return (dispatch) => {
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(
            response => response.json(),
            (error) => {
                console.log('error occured ' + error);
                dispatch(createNewPoll('Unsuccessful'));
        }
        )
        .then((json) => {
         dispatch(createNewPoll(json));
        });
    }
}