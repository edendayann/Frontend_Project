CSRF involves tricking an authenticated user into unknowingly making a request on a vulnerable web application.
CSRF targets the web application's trust in the user's browser session.
CSRF's impact depends on the actions the authenticated user can perform within the application.

fix options:
SameSite=None: The default behavior if the attribute is not specified. Cookies with this attribute will be sent with both same-site and cross-site requests.
SameSite=Lax: Cookies with this attribute will be sent with same-site requests (top-level navigations), but they will not be sent with cross-site requests initiated by things like links, pre-fetching, or iframes.
SameSite=Strict: Cookies with this attribute will only be sent with same-site requests and will not be sent with any cross-site requests.

vulnerable site attack steps:
1. OPEN inspect
2. LOGIN: for example - byle 03061997
3. COPY token from console
4. OPEN cmd
5. PASTE the command and COMPLETE the missing parts:
    curl -X POST -H "Authorization: Bearer {YOUR_TOKEN}" -F "username={YOUR_USERNAME}" -F "title=ATTACK" -F "content=you are under attack" -F "video=" -F "date=2023-07-29" http://localhost:3001/api/uploadMetaData
