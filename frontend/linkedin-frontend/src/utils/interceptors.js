const responseInterceptors = [
    {
        name: 'formatResponse',
        success(response) {
            return response.data;
        }
    },
];

const requestInterceptors = [
    {
        name: 'addHttpRequestHeader',
        success(config) {
            config.headers['Access-Control-Allow-Origin'] = '*';
            //config.headers['Authorization'] = `Bearer ${window.localStorage.getItem('personal-app-token')}`;
            return config;
        },
        fail(err) {
            console.error('request error: ', err);
            return Promise.reject(err);
        }
    }
]

const interceptors = {
    response: responseInterceptors,
    request: requestInterceptors
};

function doInstall(instance, options= { }) {
    const { type } = options;
    interceptors[type]
        .forEach((interceptor) => {
            const { success, fail } = interceptor;
            instance.interceptors[type].use(success, fail);
        })
}

export function install(instance, option = {}) {
    doInstall(instance, {
        type: 'response',
    });
    doInstall(instance, {
        type: 'request',
    });
}