import { IReview } from './review-card.interface';

export const reviews: IReview[] = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5.0,
    star: [1, 2, 3, 4, 5],
    isVerified: true,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5.0,
    star: [1, 2, 3, 4, 5],
    isVerified: true,
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5.0,
    star: [1, 2, 3, 4, 5],
    isVerified: false,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: 'Emily R.',
    rating: 4.0,
    star: [1, 2, 3, 4],
    isVerified: true,
    text: 'Shop.co has a wonderful selection that suits every occasion. The quality of the fabric and stitching is impressive, and I always get compliments when wearing their pieces.',
  },
  {
    id: 5,
    name: 'David T.',
    rating: 4.0,
    star: [1, 2, 3, 4],
    isVerified: false,
    text: "I've been shopping at Shop.co for a while now and I'm consistently pleased with the results. Great styles, good prices, and reliable delivery every time.",
  },
];
