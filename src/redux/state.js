import {rerenderEntireTree} from '../render';

let state = {
    
    profilePage: {
      posts: [
          {id:1,message:'Hi, how are you?',likesCount:17},
          {id:2,message:'It\'s my first post.',likesCount:3}
      ]
    },

    dialogsPage: {
        dialogs: [
            {id:1,name:'Dmitriy'},
            {id:2,name:'Sergey'},
            {id:3,name:'Igor'},
            {id:4,name:'Albina'},
            {id:5,name:'Aleksandr'},
            {id:6,name:'Ivan'},
            {id:7,name:'Ruslan'}
        ],
      
        messages: [
            {id:1,message:'Hi'},
            {id:2,message:'How are your?'},
            {id:3,message:'Oh'},
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;