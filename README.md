# To Start
1. clone the repo & `cd` into it
2. run `docker-compose up`
3. run the import commands found in 'import.md'
4. navigate to 'http://localhost:3000'

# Process Notes/Requirements
I decided to write a CRUD app that lets users access the data via HTTP calls. The app is written in JS/Express, uses Postgres to store the .csv data, and runs locally via Docker. The commands I used to clean + import the data are detailed in 'import.md'. The process does make a few assumptions about the computer you run it on:
1. That Docker is installed
2. That the CLI utility [xsv](https://github.com/burntsushi/xsv) is installed
3. That the import commands can be run in nushell (though they can be pretty easily ported to bash)

That's about it! Some fairly self-explanatory routes can be found at 'src/index.js', helper functions live in 'src/utils.js', and database things live in 'src/db/'. While the import process for the seed .csv is manual, the application itself has been docker-composed for easy portability.

# Caveats
Some concessions have been made in the interest of practicality, given this is supposed to be a two-to-three hour exercise:
  1. No tests: Routes can be tested via an API client like Insomnia, Postman, or cURL. In a production setting I'd absolutely add automated tests, but for MVP functionality I've skipped them.
  2. Subset of data/functionality: The given data had a number of columns I knew I wouldn't use (like latitude, longitude) so I omitted them. I also made the server routes as simple as possible, keying off of the locationid column in most cases. In a real-world setting, it's likely we'd want to do things like search the rows via food truck name, or select all food trucks that serve a certain food item.
  3. Dockerized but not deployed: While the db and server for this app run via Docker containers, I haven't deployed the app to AWS or the like since I'm just submitting the GH repo..happy to demo via ngrok or put it up on an EC2 instance if necessary!
  4. Manual import of data to postgres: I would have liked to add a startup shell script that pulls data into postgres without the need for user intervention. I decided against doing so because I wanted to spend the bulk of my time writing code, not ETL-ing the data.

