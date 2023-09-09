import { Database } from './generated-types';

export type Row<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type InsertDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type UpdateDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];

export type IToDos = Row<'todos'>;
export type IProducts = Row<'products'>;
export type IProductImages = Row<'product_images'>;
export type ILandingCfg = Row<'landing_top_cfg'>;

export type ILandingCfgExt = ILandingCfg & {
  product: IProducts;
};

export const LANDING_SECTIONS = {
  BANNER_HERO: 'landing_main_carousel',
  BANNER_TOP_RIGHT: 'landing_right_top_section',
  BANNER_TOP_CATEGORIES: 'landing_top_categories',
};
