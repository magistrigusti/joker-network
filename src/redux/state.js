import sahaAvatar from '../img/sahajpg.jpg';
import mashaAvatar from '../img/masha.png';
import radmilaAvatar from '../img/radmila.png';
import annaAvatar from '../img/anna.png';

let state = {
  postsPage: {
    postsData: [
      {id: 1, message: "Hi, my frends.", likeCount: 5},
      {id: 2, message: "How are your life", likeCount: 12},
      {id: 3, message: "welcome to my social network", likeCount: 17}
    ],
  },

  friendsPage: {
    usersData: [
      { id: 1, name: "Saha", avatar: sahaAvatar, country: "Izrael", city: "Holon", status: "online" },
      { id: 2, name: "Masha", avatar: mashaAvatar, country: "Russia", city: "Moscow", status: "ofline" },
      { id: 3, name: "Radmila", avatar: radmilaAvatar, country: "Russia", city: "Electrostal", status: "ofline" },
      { id: 4, name: "Anna", avatar: annaAvatar, country: "Russia", city: "Ivanovo", status: "ofline" }
    ],
  },

  dialogsPage: {
    usersData: [
      { id: 1, name: "Saha", avatar: sahaAvatar },
      { id: 2, name: "Masha", avatar: mashaAvatar },
      { id: 3, name: "Radmila",avatar: radmilaAvatar },
      { id: 4, name: "Anna", avatar: annaAvatar }
    ],
    
    messagesData: [
      { id: 1, message: "Hello Saha" },
      { id: 2, message: "How are you feel" },
      { id: 3, message: "I'm fine, thank you" },
      { id: 4, message: "But I'm busy now" }
    ],
  }
}

export default state;