function api(data) {
    return fetch('http://localhost:3001', {
        method:'get',
        mode: "cors" // 異なる origin の API を呼ぶために必要。
    })
        .then(res => (res.json()))
        .catch(error => ( { error } ));
}

export default api;
