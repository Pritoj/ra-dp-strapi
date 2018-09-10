# ra-dp-strapi
A simple strapi data provider for react-admin or admin-on-react

## Installation

### NPM
`npm install --save strapi-sdk-javascript ra-dp-strapi`

### Yarn
`yarn add strapi-sdk-javascript ra-dp-strapi` 

## Usage

```
/// IMPORTANT to import like this.
import Strapi from 'strapi-sdk-javascript/build/main';
import strapiDataProvider from 'ra-dp-strapi';

...
const apiUrl = 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

...

<Admin dataProvider={strapiDataProvider(strapi)}>
    ...
</Admin>

```

## TO-DO
    - Improve docs
    - Error handling
    - Tests

