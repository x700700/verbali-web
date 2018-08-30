// import cookie from 'react-cookies'

export const myFetch = (dispatch, method, url, reqBody, onSuccess, onError) =>
{
    console.log(`<<<<< FETCH ${method} ${url} - body=${JSON.stringify(reqBody)}`);
    let success = false;
    return fetch(url,
        {
            method: method,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: reqBody? JSON.stringify(reqBody) : undefined
        })
        .then((response) => {
            console.log('response: ', response);
            if (response.ok) {
                console.log(`${url} received response.`);
            }
            if (response.status === 200) {
                success = true;
                /* cookie.save('f_user', response['f_user']);
                cookie.save('connect.sid', response['connect.sid']); */
            }
            return response.json();
        })
        .then((data) => {
            if (!success) {
                console.error('FETCH ERROR - ', data);
                onError(dispatch, data.message);
            }
            else {
                console.log(`>>>>> FETCH ${method} ${url} - successfully received:`);
                console.log(data);
                onSuccess(dispatch, data);
            }
        })
        .catch((error) => {
            console.error('FETCH catch - ', error);
            onError(dispatch, error);
        });
};
