/**
 * Takes the sort params provided by React admin and 
 * converts them for use by strapi
 * @param {string} sortField 
 * @param {string} sortOrder 
 */
const getSortParams = (sortField, sortOrder) => {
    return `${sortField}:${sortOrder}`;
}

const getPaginationParams = (pagination) => {
    // Deconstruct pagination params
    const  {
        perPage,
        page
    } = pagination;

    return {
        _limit: perPage,
        _start: (page - 1) * perPage
    }
}

// TODO: Must implement this function properly
const getFilterParams = (filter) => {
    return filter;
}

/**
 * Gets the react admin params and translates them to 
 * Strapi params object
 * @param {Object} params 
 */
const createGetParams = (params) => {
    // Deconstruct to get the params passed
    // from here https://marmelab.com/react-admin/DataProviders.html
    const {
        pagination,
        sort,
        filter
    } = params;

    

    return {
        ...getPaginationParams(pagination),
        ...getFilterParams(filter),
        _sort: getSortParams(sort.field, sort.order)
    }
}
export {
    getSortParams,
    createGetParams
}
