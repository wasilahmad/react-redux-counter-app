export const incNumber = (payload) => {
    return  {
        type : 'INCREAMENT',
        payload: payload
    }
}

export const decNumber = (payload) => {
    return  {
        type : 'DECREAMENT',
        payload: payload
    }
}