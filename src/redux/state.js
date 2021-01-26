let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1,message:'Hi, how are you?',likesCount:17},
                {id:2,message:'It\'s my first post.',likesCount:3}
            ],
            newPostText: ''
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
     },
    
}

export default store;
window.store = store;