// this function is known as action creator
export const selectNews = (newsId) => {
  return {
    type: 'select_news',
    payload: newsId
  };
};
