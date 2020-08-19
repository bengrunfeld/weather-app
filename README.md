# Weather Forecast

## Local Development with Docker

We'll use Docker for local development. Since we're not using databases or external local services that require their own Docker images, this is of limited value currently, but if we choose to add them on, then all the groundwork is there, and we can quickly add them into Docker Compose.

## Dependencies

You need Docker installed to run this app. You can download it [here](https://www.docker.com/get-started)

## Installation

Clone this repo, then run docker compose from the project root.

    docker-compose up -d

## Architecture Decisions

### Next.JS

We'll use Next.JS for our front end framework. It wraps around React and gives us Static Rendering and Server Side Rendering if needed, which will be perfect fetching weather data from the API on the server rather than the client.

### GraphQL

Since there are several pieces of information that we want regarding related data sets, it's a better idea to use GraphQL so that all this can be achieved in one request. Much simpler and easier to read.

### TypeScript

Our data is coming from an external source, and this is where TypeScript really shines. We want to ensure that the incoming data is of a very specific shape so that it doesn't cause bugs in our app.

### Data Flow

[Weather Data Flow](weather-data-flow.png)

When a User navigates to the site, the App makes a request to the local GraphQL API for the data that it needs to

### Geolocation API

We'll use the Geolocation API to find out where the User is based, although they'll need to click "accept" when their browser prompts them. The reason for doing this is that it's far easier than getting them to input their city and then validating it. We will have to handle the situation where they refuse to accept the Geolocation request, though.

## OpenWeatherMap API

### Testing API Endpoints

We can use `curl` to test OpenWeatherMap API endpoints, like so:

    curl https://api.openweathermap.org/data/2.5/weather?lat=31.768318&lon=35.213711&appid=9c5f6ab0d19802f72a11bec902d3ad00

### Current Weather

We'll use the longitude and latitude we got from the Geo API for the OpenWeatherMap Current Weather API call:

    api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

### Five Day Forecast

We'll also use them for the five day forecast API call:

    api.openweathermap.org/data/2.5/forecast?lat=35&lon=139

### Relevant Documentation

Here are links to the relevant API documentation:

-   https://openweathermap.org/current
-   https://openweathermap.org/forecast5
-   https://openweathermap.org/weather-conditions

## Typeography

We'll use Google fonts:

-   Alata
-   Roboto

## Design

Our design is loosely based off of Accuweather.com. Kudos to their design team.

## Secrets

Because this is a non-production app, managing secrets becomes a little tricky, since we don't want to go to all the trouble of using a Docker or Vercel secrets service. So we will store them as environment variables, with the understanding that if this became a production app, we'd store them much more securely.
