import { tApiPagination } from './api';
export type ListPagination = Pick<tApiPagination, 'current_page' | 'last_page'>;
