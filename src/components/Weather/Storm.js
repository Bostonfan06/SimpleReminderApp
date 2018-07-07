import React from "react"

const Storm = props => (
    <div>
        { props.city && props.country && <p>Location: { props.city}, { props.country } </p> }
        { props.temperature && <p>Temperatures: {props.temperature }</p>}
        { props.humidity && <p>Humidity: { props.humidity }</p>}
        { props.description && <p>Conditions: { props.description }</p>}
        { props.error && <p>{ props.error }</p>}
    </div>
)

export default Storm;