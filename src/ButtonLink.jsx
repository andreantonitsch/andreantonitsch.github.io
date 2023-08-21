
function ButtonLink(props) {

    return <>
        <a className="button" href={props.link}>
            <span className="border"></span>
            <span className="label">{props.text}</span>
        </a>
    </>

}

export default ButtonLink