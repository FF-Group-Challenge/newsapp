# Fancy News APP  

### REST API ENDPOINT:

** *
#### POST /register

_Request Body_
```
{
    "name": "coba",
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

_Response (201 - Created)_
```
{
    "id": 1
    "name": "coba",
    "email": "coba@mail.com"
    "password" : "$2a$09$8B0PlxKr/70fdMHm8kgg3e8aoADBT.sWyq0ntcvHmd3M44eo4rKqi"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email has been already used"
}

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}

```
***
#### POST /login

_Request Body_
```
{
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

_Response (200)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email or password is incorrect"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```

___
#### GET /news-global

_Request Header_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}
```

_Response (200)_
```
{
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Paul LeBlanc",
            "title": "Trump says for first time he'll leave office if Electoral College votes for Biden - CNN",
            "description": "President Donald Trump said for the first time Thursday he will leave office if the Electoral College votes for President-elect Joe Biden but made clear he's not prepared to concede.",
            "url": "https://www.cnn.com/2020/11/26/politics/trump-leave-office-electoral-college/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201126185050-trump-thanksgiving-super-tease.jpg",
            "publishedAt": "2020-11-27T02:13:00Z",
            "content": "Washington (CNN)President Donald Trump said for the first time Thursday he will leave office if the Electoral College votes for President-elect Joe Biden but made clear he's not prepared to concede. … [+1651 chars]"
        },
}
```

_Response (401)_
```
{
  "message": "User not authenticated" 
}
```

_Response (403 - Forbidden Access)_
```
{
    "message": "Invalid Access Authorization"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```

___
#### GET /news-global

_Request Header_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}
```

_Response (200)_
```
    {
        "id": "5fbf7edc07d383001ba86113",
        "title": "SpaceX backup Starship reaches full height after nosecone installation",
        "url": "https://www.teslarati.com/spacex-backup-starship-full-height-nosecone-installed/",
        "imageUrl": "https://www.teslarati.com/wp-content/uploads/2020/11/Starship-Boca-Chica-112520-NASASpaceflight-bocachicagal-SN9-nose-install-4-crop-c-1024x577.jpg",
        "newsSite": "Teslarati",
        "summary": "",
        "publishedAt": "2020-11-26T09:55:00.000Z",
        "updatedAt": "2020-11-26T10:09:32.247Z",
        "featured": false,
        "launches": [],
        "events": []
    },
```

_Response (401)_
```
{
  "message": "User not authenticated" 
}
```

_Response (403 - Forbidden Access)_
```
{
    "message": "Invalid Access Authorization"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```

___
#### GET /news-indonesia

_Request Header_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}
```

_Response (200)_
```
{
    "data": [
        {
            "judul": "AHY Harap Khofifah Kampanyekan Machfud-Mujiaman di Surabaya",
            "link": "https://www.cnnindonesia.com/nasional/20201126205201-32-575103/ahy-harap-khofifah-kampanyekan-machfud-mujiaman-di-surabaya",
            "poster": "https://akcdn.detik.net.id/visual/2019/06/05/3ca54423-105f-4c3d-960b-e82d07feca16_169.jpeg?w=270&q=90",
            "tipe": "Nasional",
            "waktu": " • 8 jam yang lalu"
        },
    ]
}
```

_Response (401)_
```
{
  "message": "User not authenticated" 
}
```

_Response (403 - Forbidden Access)_
```
{
    "message": "Invalid Access Authorization"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
___
