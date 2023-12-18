import React from "react";

interface WrongInputProps {
text: string;
}

const WrongInput = ({text}:WrongInputProps) => {  

    return(
        <div className="error-message">
        <span>{text}</span>
      </div>
    )
}

export default WrongInput;