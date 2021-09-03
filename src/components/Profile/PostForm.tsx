import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {maxLength, required} from "../../accets/formValidators/validators"
import {Form} from "../../accets/hoc/formControls"

export type PostFormDataType = {
    postBody: string
}

const maxLength20 = maxLength(20)
const Textarea = Form("textarea")

const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postBody"} component={Textarea} validate={[required, maxLength20]}/>
            </div>
          <button>Post</button>
        </form>
    )
}

export const PostFormContainer = reduxForm<PostFormDataType>({form: "postBody"})(PostForm)