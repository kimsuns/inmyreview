const userInfo = [{
  code : '0001'
  name : '유저이름',
  id : '유저id'
}]

const category = [
  {
    type : 'resturant',
    data : [{id:1, name : '한식'}, {id:2, name:'양식'}]
  }
]


const restaurants = [
  {
    userId : '유저code',
    data: [
      {
        id: '음식점 id',
        code:'resturant',
        name:'가게명',
        area:'지역',
        address:'가게주소',
        category:1,
        price: 5000,
        url: '가게 링크',
        image: [ '','',],
        keyword: ['파스타','로제','크림'],
        review : [ {
          id:1,
          recommend: true,
          comment: '맛있다',
          date: '날짜',
        }]
      }
    ]
  }
]