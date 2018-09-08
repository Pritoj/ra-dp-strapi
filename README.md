# ra-dp-strapi
A simple strapi data provider for react-admin or admin-on-react

## Installation

### NPM
`npm install --save strapi-sdk-javascript ra-dp-strapi`

### Yarn
`yarn add strapi-sdk-javascript ra-dp-strapi` 

## Usage
```
import Strapi from 'strapi-sdk-javascript';
import strapiDataProvider from 'ra-dp-strapi';

...
    const apiUrl = 'http://localhost:1337';
    const strapi = new Strapi(apiUrl);

...

    <Admin dataProvider={strapiDataProvider(strapi, apiUrl)}>
        ...
    </Admin>

```

## Dependency
For now, you must have the strapi SDK installed and will probably need to add those files to your compliler as well.

## TO-DO
    - Improve docs
    - Error handling
    - Tests

