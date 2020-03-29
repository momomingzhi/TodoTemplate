import React,{useState,useCallback} from 'react'
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = () =>{
    const [value,setValue]=useState('');
    const onChange=useCallback(e=>{
        setValue(e.target.value);  //컴포넌트가 처음 렌더링 될때만 함수 생성
    },[]);
    const onSubmit=useCallback( //이 함수 호출되면 onInsert에 현재 value값을 파라미터로 넣어서 호출
        //현재 value값을 초기화ㅅ
        e=>{
            onInsert(value);
            setValue('');//value 값 초기화
            //submit 이벤트는 브라우저에서 새로고침을 방지
            e.preventDefault();
        }
        ,
        [onInsert,value],
    ) ;
    return(<form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="할 일 입력하시오"
        value={value}
        onChange={onChange}
        />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
    );
};

export default TodoInsert;