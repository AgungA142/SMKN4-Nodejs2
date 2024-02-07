import https from "https";

const endpoint = "https://eonqx6mpll8cs2q.m.pipedream.net";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'accept': "application/json",
    },
});