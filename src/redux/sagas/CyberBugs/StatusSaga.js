
import { call, put, takeLatest } from "redux-saga/effects"
import { statusService } from "../../../services/StatusService"
import { taskTypeService } from "../../../services/TaskTypeService"

function* getAllStatusSaga(action) {

    try {
        const { data, status } = yield call(() => {
            return statusService.getAllStatus()

        })
        console.log('data', data)
        yield put({
            type: "GET_ALL_STATUS",
            arrStatus: data.content


        })
    } catch (err) {

    }
}

export function* theoDoiGetAllStatusSaga() {
    yield takeLatest("GET_ALL_STATUS_SAGA", getAllStatusSaga)
}