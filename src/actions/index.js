export const buyItem = (item) => {
    console.log('action creator was invoked');
    return { type: 'BUY_ITEM', payload: item };
  };
