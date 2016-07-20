import BaseListView from './BaseListView'
import {fetchDefaultShots} from './api.js'

export default class DefaultShotsView extends BaseListView {
  _onFetch(page = 1, callback, options) {
    fetchDefaultShots(page).catch((error) => {
    })
    .then((responseData) => {
      console.log(responseData);
      callback(responseData)
    }).done();
 }
}
