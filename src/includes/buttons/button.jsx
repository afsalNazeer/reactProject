import "../../assets/css/main.css"

function Buttons(props){
    return (
        <article className={props.cls} to={props.lnk}>{props.title}</article>
    );
}

export default Buttons;