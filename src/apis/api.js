function api(data) {
    var api_path = "http://localhost:3001";
    if (!isNaN(data)) {
        api_path = api_path + "?limit=" + data;
    }
    return fetch(api_path, {
        method:'get',
        mode: "cors" // 異なる origin の API を呼ぶために必要。
    })
        .then(res => (res.json()))
        .then(payload => ( { payload } ))
        .catch(error => ( { error } ));
}

export default api;
