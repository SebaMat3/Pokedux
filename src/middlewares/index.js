export const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    return next(action);
}

export const featuring = (store) => (next) => (action) => {
    const featured = [{ name: 'mate' }, ...action.payload];
    const updatedAction = {
        ...action,
        payload: featured
    };
    next(updatedAction);
};