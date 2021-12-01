let renderEntireTree = () => {

}
let state = {

  FriendsPage : {
    userData: [
      { id: 1, name: 'Alex Mitchel', link: '/dialogs/1', job: "Front-end devevoper", img: "https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg" },
      { id: 2, name: 'Dorian Gray', link: "/dialogs/2", job: "Actor", img: "https://www.film.ru/sites/default/files/styles/thumb_600x680/public/articles/1452017-1173790.jpg" },
      { id: 3, name: 'Antony Smith', link: "/dialogs/3", job: "Doctor", img: "https://top10a.ru/wp-content/uploads/2019/09/10-82.jpg" },
      { id: 4, name: 'Mattew Andruwson', link: "/dialogs/4", job: "Fireman", img: "https://st2.depositphotos.com/1001959/11727/i/950/depositphotos_117270814-stock-photo-firefighter-in-oxygen-mask.jpg" },
      { id: 5, name: 'Milla Cotlin', link: "/dialogs/5", job: "Lawyer", img: "https://clutch.net.ua/images/2019/07/31/7uvUpQUmopj6G6J4iNfa1FXRXSzFJdFxv62JBJTZ.jpeg" },
    ]
  },


RightbarPage : {
  FriendsRequestData: [
    { name: 'Antony Daugloy', mutual: '12', img: 'https://bugaga.ru/uploads/posts/2016-07/1469432833_mister-world-3.jpg' },
    { name: 'Glorya Mitchel', mutual: '4', img: 'https://miro.medium.com/max/9216/0*KEs-jZkVHlcbBEuY' },
    { name: 'Ivelina Campbell', mutual: '2', img: 'https://miro.medium.com/max/1200/1*LPPpUZLved9uY_9gvRgRlw.jpeg' },
  ],

  ConfirmRequestData: [
    {name: 'Valeriy Sergeev', mutual: '3', img: "https://p0.pikist.com/photos/719/257/man-model-face-adult-guy-male-person-portrait-handsome.jpg" },
    {name: 'Carl Vangon', mutual: '5', img: "https://media.krasota.ru/filer_public/fa/ae/faae81fe-0461-4af9-986a-f7249d8fca67/39_rodri_gogurio.jpg" },
    {name: 'Stivi Jonson', mutual: '10', img: "https://n1s2.hsmedia.ru/1a/51/d1/1a51d131fd1802f579a448dc2b0ebcf9/1565x2348_0xac120003_17871423461627298878.jpg" },
    {name: 'Kazachuk Li', mutual: '2', img: "https://i.pinimg.com/originals/a3/36/94/a3369465766bdb0e5d6947d885de8be0.jpg" },
  ]
},

FeedPostsPage : { 
  FeedPostsData: [
    {id: 1,
     img: 'https://klike.net/uploads/posts/2019-10/1570368924_222.jpg',
     user: 'Surfiya Zakir',
     time: '22 min ago',
     content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eum et laudantium voluptatem! Molestiae repudiandaealiquam ut alias quis vel, saepe, ea architecto necessitatibus earum et delectus. Eum quibusdam cumque nostrum, assumenda eius, nulla saepe voluptas iusto sunt suscipit voluptates.',
     like: '2.8k',
     comments: '22',
    }
  ]
}

}

export const addPost = (postMessage) => {
  let NewPost = {
    id: 5,
    content: postMessage,
    like: 0,
    comments: 0,
    user: '',
  };

  state.FeedPostsPage.FeedPostsData.push(NewPost)
  renderEntireTree (state);
}


export const subscribe = (observer) => {
  renderEntireTree = observer;
}
export default state;