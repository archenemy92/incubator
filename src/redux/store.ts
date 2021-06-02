let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"



export type PostType = {
    message: string
    id: number
    like: number
    dislike: number
    img: string
}

export type DialogItemsType = {
    name: string
    id: string
    img: string
}

export type sidebarItemsType = {
    id: number
    name: string
    img: string
    value: string
}

export type PostDataType = {
    postData: PostType[]
}

export type DialogDataType = {
    dialogData: DialogItemsType[]
}

export type SidebarDataType = {
    sidebarData: sidebarItemsType[]
}

export type StateType = {
    profilePage: PostDataType
    dialogsPage: DialogDataType
    sidebarPage: SidebarDataType
}

export let state: StateType = {
    profilePage: {
        postData: [
            {message: "Hello", id: 1, like: 0, dislike: 0, img: ava},
            {message: "Hello my friend", id: 1, like: 0, dislike: 0, img: ava},
            {message: "Hello dude", id: 1, like: 0, dislike: 0, img: ava},
            {message: "Hello man", id: 1, like: 0, dislike: 0, img: ava}
        ]
    },
   dialogsPage: {
       dialogData: [
           {name: "LENKA", id: "1", img: ava},
           {name: "YURA", id: "2", img: ava},
           {name: "NIKITA", id: "3", img: ava},
           {name: "MARGO", id: "4", img: ava},
           {name: "ANASTASIYA", id: "5", img: ava},
           {name: "OXANA", id: "6", img: ava},
           {name: "VOLODYMYR", id: "7", img: ava},
           {name: "KARINA", id: "8", img: ava}
       ]
   },
    sidebarPage: {
        sidebarData: [
            {id: 1, name: "LENKA", img: ava, value: "hey"},
            {id: 1, name: "MARGO", img: ava, value: "hey"},
            {id: 1, name: "NIKITA", img: ava, value: "hey"}
        ]
    }
}