Brayden Cowell
bcowell@hotmail.ca
===================================

# Setup & Run
## To start client
```
$ cd client
$ npm start
```
or build/transpile for prod
```
$ npm run build
```

# Folder Structure
```
README.md
.gitignore
client/
    build/
    public/
    src/
        components/
            App.js
            x/
                actions
                reducer
                x.js
        constants/
            actionTypes
            api
        reducers/
            rootReducer
        store/
            store.js
        index.js
```

# Notes
The client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
3rd party [nhl API docs](https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md) 
In nhl teams are split into two conferences East/West and then sub divided into divisions East(Atlantic,Metropolitan) and West(Pacific,Central)

# Ideas
Tables/stats view of players/teams/positions for the nhl
```
/                   - landing a nice table view of the current east/west team rankings
/teams              - A searchable list of all nhl teams where you can 
    /teams:id/stats - view a teams stats
/positions          -
```

# Todo
Add toggle for Eastern/Western conference on home page - currently just defaulted to Eastern in state
Stats for individual teams
Host project (Netlify/Github)
Add team icons
Add loading animation