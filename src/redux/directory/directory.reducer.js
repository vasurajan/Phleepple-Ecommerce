const INITIAL_STATE = {
    sections: [
      {
        title: 'phones',
        imageUrl: 'https://res.cloudinary.com/kaliangrag/image/upload/v1604682949/apple/homepage/phones.webp',
        id: 1,
        linkUrl: 'shop/phones'
      },
      {
        title: 'macs',
        imageUrl: 'https://res.cloudinary.com/kaliangrag/image/upload/v1604682950/apple/homepage/macs.webp',
        id: 2,
        linkUrl: 'shop/macs'
      },
      {
        title: 'home',
        imageUrl: 'https://res.cloudinary.com/kaliangrag/image/upload/v1604682950/apple/homepage/home.webp',
        id: 3,
        linkUrl: 'shop/home'
      },
      {
        title: 'accessories+',
        imageUrl: 'https://res.cloudinary.com/kaliangrag/image/upload/v1604682950/apple/homepage/accessories.webp',
        size: 'large',
        id: 4,
        linkUrl: 'shop/accessories'
      },
      {
        title: 'iOne',
        imageUrl: 'https://res.cloudinary.com/kaliangrag/image/upload/v1604682950/apple/homepage/one.webp',
        size: 'large',
        id: 5,
        linkUrl: 'shop/one'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;