import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Form} from "../../accets/hoc/formControls"
import {maxLength, required} from "../../accets/formValidators/validators"


export type DialogsFormDataType = {
    messageBody: string
}
const Textarea = Form("textarea")
const maxLength50 = maxLength(50)

const DialogsForm:React.FC<InjectedFormProps<DialogsFormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"messageBody"} component={Textarea} autoFocus validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

export const DialogsFormContainer = reduxForm<DialogsFormDataType>({form: "message"})(DialogsForm)