let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "blablaa", likesCount: 12},
        ],
        newPostText: 'it-kamasutra.com'
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How a u?'},
            {id: 3, message: 'Whats up?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
    },

}

window.state = state

export const addPost = () => {
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likeCount: 0
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export let store = {

}

export default state;