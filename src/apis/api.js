function api(data) {
    return fetch('http://localhost:3001', {
        method:'get'
    })
        .then(res => (res.json()))
        .catch(error => ( { error } ));
}

export default api;
