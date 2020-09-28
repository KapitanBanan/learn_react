import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, jerk!', likesCount: '27'},
            {id: 2, message: 'Hi, dumps!', likesCount: '31'}
        ],
        newPostText: 'come on, write something'
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Timur'},
            {id: 2, name: 'Ruslan'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;