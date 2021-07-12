import {ActionsType, SidebarDataType} from "./store"
import {v1} from "uuid"

let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"

const initState: SidebarDataType= {
    sidebarData: [
        {id: v1(), name: "LENKA", img: ava, value: "hey"},
        {id: v1(), name: "MARGO", img: ava, value: "hey"},
        {id: v1(), name: "NIKITA", img: ava, value: "hey"}
    ]
}
export const sidebarReducer = (state = initState, action: ActionsType): SidebarDataType => {
    return state
}