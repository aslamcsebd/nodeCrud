### [Node+html install](https://www.youtube.com/watch?v=1N_woj_2sGs&list=PLDbgPtNOy-yDNvC2UBWwWsJT8J-X5BUzv&index=2&ab_channel=WebDevLab)

<details>
    <summary>Project install</summary>

-   npm init
-   touch app.js
-   npm install express
    - sudo npm install -g nodemon

    - npm install nodemon -D
    - nodemon app.js

    - [nodemon] app crashed - waiting for file changes before starting...
    - sudo pkill -f node

    - nodemon restart
    - npx nodemon app.js

    - best    : npm run dev
    - old     : npm start
</details>

<details>
    <summary>Postman url</summary>

-   all player => get => http://localhost:5000/api/players
-   add player => post => http://localhost:5000/api/player/add

        body.raw.json
        {
            "name": "full name",
            "club": "full club"
        }
-   update player => put => http://localhost:5000/api/player/update/17
        
        body.raw.json
        {
            "name": "full name2",
            "club": "full club2"
        }
-   delete player => delete => http://localhost:5000/api/player/delete/17
</details>