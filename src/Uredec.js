/* 
  useReducer : state에서 조금 더 빨리 갈 수 있게 만드는 것
                state가 너무 많아지거나 부모와 자식 간의 관계가 복잡한 경우에
                관리는 해줘서 빠르게 작업할 수 있게 도와주는 Hook
  dispatch(타입에 이벤트를 발생시키는 역할) 가 reducer를 호출함
        reducer (메모리를 가지고 있음) store 에서 state 값을 가져와서 그리고 새로운 state 반환해줌
        
        Component(함수) 가지고 오는데 - (dispatch)가 있음, 가지고 오면서 
        -> Action -> Reducer가지고 옴 -> Store
        dispatch({type:'값' <- 타입은 스트링이다 라는 것을 알 수 있음});
        dispatch({'값', data:'변경될 값'});


*/

import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'PLUS' :
          return state + 1;
        case 'MINUS' : 
          return state - 1;
        default:
          return state;
    }
}


export default function Count() {
  // const [상태 객체, 디스패치 함수] = useReducer(reducer 함수, 초기상태)
  const [number, dispatch] = useReducer(reducer, 0)

  //(reducer, 0) 옆에 reducer와 위의 함수 reducer
  // props : 엄마아빠의 성의 물려받는 것. 상속
 

  const onPlus = () => {
      dispatch({type:'PLUS'});
  }

  const onMinus = () => {
      dispatch({type : 'MINUS'})
  }


  return(
      <div>
        <h3>{number}</h3>
        <button onClick={onPlus}> + </button>
        <button onClick={onMinus}> - </button>
      </div>
  )

}

