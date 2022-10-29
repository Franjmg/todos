export default function CreateTodoButtom(props){
    return(
        <button 
            className="createbuttom"
            onClick={() => console.log("click")}
        >
            <i className="fa-sharp fa-solid fa-plus"></i>
        </button>
    );
}