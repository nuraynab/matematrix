export const registerUser = (userData) => (dispatch) => {

    return fetch('http://localhost:8000/' + 'users', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if(response.ok){
                    return response;
                } else{
                    let error = new Error('Error ' + response.status + ": " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw new Error(error.messages);
            })
        .then(response => response.json())
        .then(response => alert('Вы были успешно зарегистрированы!\n: ' + JSON.stringify(response)))
        .catch(error => {console.log('register user', error.message); alert('Ошибка регистрации\nError: ' + error.message);});
}

export const processLogin = (username, password) => (dispatch) => {

    return fetch('http://localhost:8000/' + 'login', {
        method: "POST",
        body: JSON.stringify(username, password),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if(response.ok){
                    return response;
                } else{
                    let error = new Error('Error ' + response.status + ": " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw new Error(error.messages);
            })
        .then(response => response.json())
        .then(response => alert('Вы успешно вошли в свой аккаунт!\n: ' + JSON.stringify(response)))
        .catch(error => {console.log('login', error.message); alert('Ошибка входа\nError: ' + error.message);});
}

