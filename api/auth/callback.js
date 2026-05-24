export default async function handler(req, res) {
  const { code } = req.query;
  
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    })
  });
  
  const data = await response.json();
  
  if (data.access_token) {
    res.send(`
      <script>
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}',
          '*'
        );
        window.close();
      </script>
    `);
  } else {
    res.send(`
      <script>
        window.opener.postMessage(
          'authorization:github:error:${JSON.stringify(data)}',
          '*'
        );
        window.close();
      </script>
    `);
  }
}
