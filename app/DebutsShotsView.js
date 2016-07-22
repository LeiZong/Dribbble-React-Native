import BaseListView from './BaseListView'
import {fetchDebutsShots} from './api'

export default class SettingsView extends BaseListView {
  _onFetch(page = 1, callback, options) {
    fetchDebutsShots(page).catch((error) => {
    })
    .then((responseData) => {
      callback(responseData)
    }).done();
 }
}
