import { Database as DB } from 'data/types/database-types';

declare global {
  type Database = DB;
}
