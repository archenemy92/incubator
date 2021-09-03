import React from "react"

export function Form<T>(El: string) {
    return function (props: any) {
        let {input, meta, ...restProps} = props
        const error = meta.touched && meta.error
        return (
            <div>
                <label>
                    <div>
                        <El {...input} {...restProps as T} style={{border: "solid 2px red"}}/>
                    </div>
                    <div style={{color: "red", fontSize: "10px"}}>
                        {error && <span >{meta.error}</span>}
                    </div>
                </label>
            </div>
        )
    }
}
