export const loginConfig = (data) => {

    let config = {
        method: 'post',
        url: 'https://morning-headland-04700.herokuapp.com/http://dev.mymedsapi.com/auth/qrcode/request/viewUser/login',
        headers: { 
          'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp', 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return config;
}

export const signUpConfig = (data) => {

    let config = {
        method: 'post',
        url: 'https://morning-headland-04700.herokuapp.com/http://dev.mymedsapi.com/qrcode/request/viewUser/create',
        headers: { 
          'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp', 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return config;
}