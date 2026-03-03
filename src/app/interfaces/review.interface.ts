export interface IReview {
  id: number;
  name: string;
  verified: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  star: number[];
  text: string;
  postedOn: string;
  date: string;
}
