# team reg api 
{
  "teamFullName": "Phoenix Legends",
  "teamShortName": "PHX",
  "teamLogo": "uploads/logo.png",  // or send file in multipart/form-data
  "players": [
    { "role": "IGL", "fullName": "Hamed Hasan", "inGameName": "H4MED", "uid": "123456789" },
    { "role": "Player 2", "fullName": "Arif Khan", "inGameName": "AK47", "uid": "987654321" },
    { "role": "Player 3", "fullName": "Nayeem Rahman", "inGameName": "NR99", "uid": "564738291" },
    { "role": "Player 4", "fullName": "Sajid Ali", "inGameName": "SAJ", "uid": "998877665" },
    { "role": "Player 5", "fullName": "Rafiul Islam", "inGameName": "RFX", "uid": "223344556" }
  ]
}

{
  "success": true,
  "message": "Team registered successfully!",
  "data": {
    "_id": "64f9c0e4b2a3f123456789",
    "teamFullName": "Phoenix Legends",
    "teamShortName": "PHX",
    "teamLogo": "uploads/logo.png",
    "players": [
      { "role": "IGL", "fullName": "Hamed Hasan", "inGameName": "H4MED", "uid": "123456789" },
      ...
    ],
    "submittedAt": "2025-10-09T05:20:40.123Z"
  }
}

GET /api/team/:id – Get Single Team"# scenario3" 
