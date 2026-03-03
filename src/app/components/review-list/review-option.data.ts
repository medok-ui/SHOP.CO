import { IFilterOption } from './review-option.interface';

export const filterOptions: IFilterOption[] = [
  { value: 'most-recent', label: 'Most Recent' },
  { value: 'highest-rating', label: 'Highest Rating' },
  { value: 'lowest-rating', label: 'Lowest Rating' },
];
