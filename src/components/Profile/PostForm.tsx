import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"

export type PostFormDataType = {
    postBody: string
}


const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postBody"} component={"textarea"} />
            </div>
          <button>Post</button>
        </form>
    )
}

export const PostFormContainer = reduxForm<PostFormDataType>({form: "postBody"})(PostForm)