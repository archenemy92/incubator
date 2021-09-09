import React from "react"
import style from  "./formControls.module.css"

export function Form<T>(El: string) {
    return function (props: any) {
        let {input, meta, ...restProps} = props
        const error = meta.touched && meta.error
        return (
            <div>
                <label>
                    <div className={!error?style.textField: style.errorField}>
                        <El {...input} {...restProps as T}/> {props.fieldTitle}
                    </div>
                    <div className={style.error}>
                        {error && <span>{meta.error}</span>}
                    </div>
                </label>
            </div>
        )
    }
}
