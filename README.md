## Stiletto Web

Web with different utilities for the game Last Oasis, but is not affiliated with [Donkey Crew](https://www.donkey.team/)
It is created with JS (react), HTML, CSS (bootstrap) and PHP API
You can see this website in operation here: [www.stiletto.live](https://www.stiletto.live/)

### Working

- See the list of objects and calculate what it costs to do it in different amounts
- Showing the total cost of making all the objects
- Linking the web with discord
- Create clans, edit clans and link them to a discord server
- See the list of walkers of that clan, collected by the discord bot
- Managing clan people
- Sharing quality maps in the same clan
- Trading system
- Auction Timers
- Section where to create a list of allies, enemies or NAP
- System to make the web multi-language

#### Environmental variables

- REACT_APP_API_URL= API ADDRESS
- REACT_APP_DISCORD_CLIENT_ID= DISCORD CLIENT ID
- REACT_APP_API_GENERAL_URL= URL API ADDRESS FOR ICONS AND MAPS
- REACT_APP_GA_ID= Google Analytics ID

#### Generate maps

Library: [gdal2tiles-leaflet](https://github.com/commenthol/gdal2tiles-leaflet)

Command to generate it:
`python gdal2tiles.py -l -p raster -z 0-5 -w none <image> <folder>`
