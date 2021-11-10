export default async function products(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  await fetch('http://localhost:8000/status', {
    method: "GET",
  }).then(async (response) => {
    const sendStatus = await response.text();
    res.status(response.status).send(sendStatus);
  }).catch(() => {
    res.status(404).send("Hoagie API seems to be down. Please try again later.");
  });
};