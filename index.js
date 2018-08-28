import Strapi from 'strapi-sdk-javascript';
import { stringify } from 'query-string';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'react-admin';

import { createGetParams } from './utils';

export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
    const strapi = new Strapi(apiUrl);

    return async (type, resource, params) => {
        if (type === GET_LIST) {
            // This translates React admin params to strapi params
            const strapiParams = createGetParams(params)

            // Get the list 
            const list = strapi.getEntries(resource, strapiParams);

            // get the total
            // We'll use a hack here till strapi sdk
            // provides a default way to do this
            const total = httpClient(`${apiUrl}/${resource}/count`);

            // We put both in a promise instead of waiting for them
            // Since they can both be done separately
            const data = await Promise.all([list, total]);

            return { data:data[0], total:data[1].json };
        }
        return false;
    }
}