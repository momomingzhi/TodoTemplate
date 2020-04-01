import React from 'react';
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem=({todo,onRemove, onToggle})=>{
    const {id,text,checked}=todo;
    console.log('id: ',id);
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox',{checked})}  >
                {checked?<MdCheckBox />:<MdCheckBoxOutlineBlank />} 
                <div className='text'>{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};
export default TodoListItem;