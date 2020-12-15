This project was written on React, Node, Express, Mongo DB.

To launch the App:

1. Open the terminal cd to client, and type 'npm start';
2. Open second terminal cd to back and type 'npm start'

Admin data = {
login: dima,
password: dima,
}

To launch Ionic App in web:

1. Open the terminal cd to back and type 'npm start';
2. Open second terminal cd to ionic and type 'ionic serve';

To launch ionic on emulator:

1. Open the terminal cd to back and type 'npm start';
2. Open second terminal cd to ionic and type 'ionic cap run ios -l --external'
3. in terminal you will see the IP on which server started. Copy it and replace with IP in API requests in ionic>.env (REACT_APP_API). After change one more IP to allowe CORS in back>.env(MOBILE_EMULATOR_URL);
4. When replaced IP, restart ionic app in ionic terminal: 'ionic cap run ion -l --external';
