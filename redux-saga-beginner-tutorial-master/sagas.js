import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'

//worker saga : 비동지 증가 태스크 수행
export function* incrementAsync() {
  yield delay(1000)
  yield put ({ type: 'INCREMENT'})
}

//watcher Saga : 각각의 INCREMENT_ASYNC 에 incrementAsync 테스크를 생성
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}