function Project(props) {
    return (
        <div>
            {(() => {
                if (props.displayFull) {
                    return (
                        <h3>{props.project.name}</h3>
                    )
                }
            })()}
            <p>{props.project.description}</p>
            {(() => {
                if (props.displayFull) {
                    return (
                        <a href={props.project.url}>Link</a>
                    )
                }
            })()}
        </div>
    )
}

export default Project