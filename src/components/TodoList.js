export default function TodoList(props) {
    return(
        <section>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}