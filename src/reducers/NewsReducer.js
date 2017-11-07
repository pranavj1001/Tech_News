import axios from 'axios';

class getData {

  returnData() {
    axios({
        method: 'get',
        url: 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=bdbcae478d174e04ba1504b2914cc143'
    }).then(response => response.articles);
  }

}

export default getData.returnData;
