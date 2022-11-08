import { combineReducers } from 'redux';
import {reducer as staffreducer} from './staff/Reducer';
import {reducer as studentreducer} from './student/Reducer'

const rootReducer = combineReducers({
    staffreducer,
    studentreducer
})
export default rootReducer