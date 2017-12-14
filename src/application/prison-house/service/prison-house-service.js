// import axios from 'axios';

export default {
  getPrisonHouseList() {
      var response = [
            {
                name: '十一监区',
                id: 123,
                makeDate: '2019-10-11 12:12:12',
                updateDate: '2012-12-12 12:12:12'
            },
            {
                name: '十二监区',
                id: 32346,
                makeDate: '2019-10-12 12:12:12',
                updateDate: '2012-12-11 12:12:12'
            },
            {
              name: '十三监区',
              id: 32347,
              makeDate: '2019-10-12 12:12:12',
              updateDate: '2012-12-11 12:12:12'
          }
      ];
      return new Promise((resolve) => {
          resolve(response);
      });
  }
};
