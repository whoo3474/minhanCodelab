import {delay} from 'redux-saga'
import {put, takeEvery, all} from 'redux-saga/effects'


export function* helloSaga() {
  console.log('Hello Sagas!')
}

//worker saga : 비동지 증가 태스크 수행
export function* incrementAsync() {
  yield delay(1000)
  yield put ({ type: 'INCREMENT'})
}

//watcher Saga : 각각의 INCREMENT_ASYNC 에 incrementAsync 테스크를 생성
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}