import React from "react"

const Message = ({variant, children}) => {
    return <div className={`notice ${variant}`}>{children}</div>
}

Message.defaultProps = {
    variant: "alert-info"
}

export default Message