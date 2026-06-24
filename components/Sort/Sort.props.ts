import { ComponentProps } from 'react';

// Alternative: export enum SortEnum {Rating, Price}
export type SortType = 'rating' | 'price';

export interface SortProps extends ComponentProps<'div'> {
  sort: SortType;
  dir: 'asc' | 'desc';
}
