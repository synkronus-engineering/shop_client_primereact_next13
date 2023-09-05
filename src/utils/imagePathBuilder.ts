import { APP_CFG_BUCKET_ATTACHMENTS, APP_CFG_REST_URLS } from 'lib/res_definitions';
import { isNil } from 'lodash';

export const buildPathProduct = (path: string, imgName: string): string => {
  return !path || !imgName
    ? '/assets/products/default/img_shop_404.png'
    : `${APP_CFG_REST_URLS.BASE_URL_BUCKET}/${APP_CFG_BUCKET_ATTACHMENTS.BASE_STORAGE}/${APP_CFG_BUCKET_ATTACHMENTS.PRODUCTS_BUCKET}/${path}/${imgName}`;
};

export type ParamsAttachmentType = {
  path?: string;
  name?: string;
};

export const buildPathSrcProduct = (params: ParamsAttachmentType): string => {
  return isNil(params)
    ? `/assets/products/default/img_shop_404.png`
    : `${APP_CFG_REST_URLS.BASE_URL_BUCKET}/${APP_CFG_BUCKET_ATTACHMENTS.BASE_STORAGE}/${APP_CFG_BUCKET_ATTACHMENTS.PRODUCTS_BUCKET}/${params.path}/${params.name}`;
};

export const buildPathImgBlog = (path_img: string, imgName: string): string => {
  return isNil(path_img) || isNil(imgName)
    ? `/assets/blog/default/Image_not_available.png`
    : `${APP_CFG_REST_URLS.BASE_URL_BUCKET}/${APP_CFG_BUCKET_ATTACHMENTS.BASE_STORAGE}/${APP_CFG_BUCKET_ATTACHMENTS.BLOG_ARTICLES}/${path_img}/${imgName}`;
};

export const imgAvatarPathBuilder = (url_avatar: string): string => (url_avatar || (url_avatar || []).length == 0 ? `/assets/avatar/default_avatar.svg` : url_avatar);

export const buildPathSrcGen = (path_img: string, imgName: string): string => {
  return isNil(path_img) || isNil(imgName)
    ? `/assets/landing/img-not-available.png`
    : `${APP_CFG_REST_URLS.BASE_URL_BUCKET}/${APP_CFG_BUCKET_ATTACHMENTS.BASE_STORAGE}/${APP_CFG_BUCKET_ATTACHMENTS.LANDING_SECTIONS}/${path_img}/${imgName}`;
};
