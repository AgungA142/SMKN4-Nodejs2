import https from 'https';

const endpoint = 'https://eonqx6mpll8cs2q.m.pipedream.net';

const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "accept": "application/json",
    }
}, (response) => { 
    response.addListener('data', (data) => {
        console.info(`Receive data : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    name: 'John Doe'
});

request.write(body);
request.end();