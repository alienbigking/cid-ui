import axios from 'axios';
import outInPrisonReasonStorage from './out-in-prison-reason-storage';

export default {
  getAllOutInPrisonReasons() {
    let outInPrisonReasons = outInPrisonReasonStorage.getOutInPrisonReasons();
    if (outInPrisonReasons) {
      return Promise.resolve(outInPrisonReasons);
    }
    return axios.get('/api/out-in-prison-reasons').then(response => {
      outInPrisonReasons = response.data;
      outInPrisonReasonStorage.setOutInPrisonReasons(outInPrisonReasons);
      return outInPrisonReasons;
    });
  }
};
