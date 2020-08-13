export const SET_FAVOURITE = 'SET_FAVOURITE'
export const SET_FILTER = 'SETFILTER'

export const setFavourite = (id) => {
    return { type: SET_FAVOURITE, DataId: id }
}

export const setFilter = (config) => {
    return { type: SET_FILTER, DataId: config }
}