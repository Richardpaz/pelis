
import "../styles/ButtonPage.css";
export function ButtonPage({texto,disabled,onClick}) {
    return(
        <button className="button-page" disabled={disabled} onClick={onClick}>{texto}</button>
    )
}