const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      oldPrice: 45,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'chair',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'chair',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'chair',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'chair',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'dining',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'dining',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'dining',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'table',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 3,
      userRating: 5,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 4,
      ratingActive: true,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favorite: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'sofa',
      price: 30,
      stars: 2,
      userRating: 3,
      ratingActive: false,
      promo: 'sale',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
  deals: [
    {
      id: 'deal-1',
      name: 'GUEST ROOM',
      subname: 'SOFA',
      value: '-20%',
      image: '/images/deal-1.jpeg',
    },
    {
      id: 'deal-2',
      name: 'OFFICE CHAIR',
      subname: 'COLLECTION',
      value: '$200.00',
      image: '/images/deal-2.jpeg',
    },
    {
      id: 'deal-3',
      name: 'SPECIAL COLLECTION',
      subname: 'SAVE UP 45% OF FURNITURE',
      image: '/images/deal-3.jpeg',
    },
    {
      id: 'deal-4',
      name: 'Bedroom Bed',
      value: '$50.80',
      image: '/images/deal-4.jpeg',
    },
  ],
  feedbacks: [
    {
      id: 1,
      name: 'John Deere',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio. Aenean ac pellentesque arcu. Fusce ullamcorper elementum leo, ',
    },
    {
      id: 2,
      name: 'Alex Kingstone',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio. Aenean ac pellentesque arcu. Fusce ullamcorper elementum leo, ',
    },
    {
      id: 3,
      name: 'Cecil Stedman',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio. Aenean ac pellentesque arcu. Fusce ullamcorper elementum leo, ',
    },
  ],

  brands: [
    { id: 1, name: 'Brand1' },
    { id: 2, name: 'Brand2' },
    { id: 3, name: 'Brand3' },
    { id: 4, name: 'Brand4' },
    { id: 5, name: 'Brand5' },
    { id: 6, name: 'Brand6' },
    { id: 7, name: 'Brand7' },
    { id: 8, name: 'Brand8' },
  ],

  hotdeals: [
    {
      id: 'aenean-ru-bristique-2',
      dotId: 2,
      name: 'Aenean Ru Bristique 2',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      dotId: 3,
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      dotId: 4,
      name: 'Aenean Ru Bristique 4',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
  ],

  blogs: [
    {
      id: 1,
      photo: 'aenean-ru-bristique-1',
      name: 'Product That Fight Static',
      date: '15 JAN 2016',
      comments: '4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio.',
    },
    {
      id: 2,
      photo: 'aenean-ru-bristique-4',
      name: 'Product That Fight Static',
      date: '15 JAN 2016',
      comments: '4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio.',
    },
    {
      id: 3,
      photo: 'aenean-ru-bristique-3',
      name: 'Product That Fight Static',
      date: '15 JAN 2016',
      comments: '4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt orci dui, commodo consectetur augue elementum sed. Donec at sem rutrum, pulvinar arcu et, efficitur nibh. Nam vitae sollicitudin justo, at ullamcorper odio.',
    },
  ],
};

export default initialState;
