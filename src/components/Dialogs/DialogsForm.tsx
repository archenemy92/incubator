import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"


export type DialogsFormDataType = {
    messageBody: string
}

const DialogsForm:React.FC<InjectedFormProps<DialogsFormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"messageBody"} component={"textarea"} autoFocus/>
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

export const DialogsFormContainer = reduxForm<DialogsFormDataType>({form: "message"})(DialogsForm)