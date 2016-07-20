import BaseListView from './BaseListView'
import {fetchGifShots} from './api.js'

export default class ContactsView extends BaseListView {
  _onFetch(page = 1, callback, options) {
    fetchGifShots(page).catch((error) => {
    })
    .then((responseData) => {
      callback(responseData)
    }).done();
 }
}
