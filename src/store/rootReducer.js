import { combineReducers } from 'redux';

import detailsDialogReducer from './reducers/detailsDialogs.reducer';
import infoDialogReducer from './reducers/infoDialog.reducer';
import newReportReducer from './reducers/newReportDialog.reducer';
import incidentsReducer from './reducers/incidents.reducer';
import tagsReducer from './reducers/tags.reducer';
import reportReducer from './reducers/report.reducer';
import filterReducer from './reducers/filter.reducer';
import imagesDialogReducer from './reducers/imagesDialog.reducer';

const rootReducer = combineReducers({
  detailsDialog: detailsDialogReducer,
  infoDialog: infoDialogReducer,
  incidents: incidentsReducer,
  reportDialog: newReportReducer,
  report: reportReducer,
  tags: tagsReducer,
  filter: filterReducer,
  imagesDialog: imagesDialogReducer
})

export default rootReducer;
