export default function TodoItem(props){
    
    const onCompleted = () => {
        alert('Ya completaste el todo ' + props.text)
    }

    const onDelete= () => {
        alert('Ya terminaste el todo ' + props.text)
    }

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleted}
            >
                <i className="fa-solid fa-check"></i>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <i className="fa-solid fa-trash-can"></i>
            </span>
        </li>
    );
}