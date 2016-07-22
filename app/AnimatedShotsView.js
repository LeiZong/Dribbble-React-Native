import BaseListView from './BaseListView'
import {fetchGifShots} from './api'

export default class DefaultShots extends BaseListView {
  _onFetch(page = 1, callback, options) {
    fetchGifShots(page).catch((error) => {
    })
    .then((responseData) => {
      console.log(responseData);
      callback(responseData)
    }).done();
 }
}
