import { ImageElm } from 'components/image/ImageCmp';
import { ILandingCfg, ILandingCfgExt, LANDING_SECTIONS } from 'data/types/app_types';
import { filter, first, map, take } from 'lodash';
import Link from 'next/link';
import { getProductLinkRedirect } from 'utils/product-operations';

const ButtonLink = ({ btn_label, product, csName, children = null }) => {
  return (
    <Link href={getProductLinkRedirect(product)} passHref className={`capitalize p-button p-button-rounded p-button-raised text-xl border-none mt-3 font-normal px-3 ${csName}`}>
      {btn_label}
      {children}
    </Link>
  );
};

type CmpProps = {
  title: string;
  sub_title: string;
  btn_label: string;
  img_path: string;
  img_name: string;
  product: any;
};

const CardColCmp = ({ btn_label, title, sub_title, img_path, img_name, product }: CmpProps) => {
  return (
    <div className="font-bold border-round h-17rem text-start p-3 border-round-sm">
      <div
        className="shadow-2 border-round h-full w-full p-3 surface-card"
        style={{
          backgroundImage: `url(/assets/landing/${img_name})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="block text-xl font-bold mt-4 uppercase">{title}</div>
        <div className="text-xl text-orange-500 font-bold my-3 uppercase">{sub_title}</div>
        <ButtonLink btn_label={btn_label} product={product} csName={'btnRed'}>
          <i className="pi pi-arrow-right text-sm ml-2"></i>
        </ButtonLink>
      </div>
    </div>
  );
};

const HeroBanner = ({ dataSet }: { dataSet: ILandingCfg[] }) => {
  const mainBanner = first(filter(dataSet, ['landing_section.code', LANDING_SECTIONS.BANNER_HERO])) as ILandingCfgExt;

  return (
    <div className="grid grid-nogutter surface-section text-800 ">
      <div className="col-12 md:col-9 mobileActiveShowNone px-1">
        <div className="grid align-items-center px-4">
          <div className="col-8 nested-grid text-center md:text-left align-items-center mobileActiveShowNone">
            <section>
              <span className="uppercase block text-3xl font-bold mb-1">{mainBanner?.sub_title}</span>
              <div className="uppercase text-6xl font-bold my-2">{mainBanner?.title}</div>
              <span className="uppercase block text-2xl font-bold my-2 lablelRed">{mainBanner?.discount}</span>
              <p className="mt-0 mb-4 text-900 text-xl line-height-3">{mainBanner?.description}</p>
              <ButtonLink btn_label={mainBanner?.btn_label} product={mainBanner?.product} csName={'line-height-3 btnBlack'} />
            </section>
          </div>
          <div className="col-4 overflow-hidden flex justify-content-end ">
            <ImageElm src="/assets/landing/banner_hero.png" alt="hero-1" height={450} />
          </div>
        </div>
      </div>
      <div className="col-12 md:col-3">
        {map(take(filter(dataSet, ['landing_section.code', LANDING_SECTIONS.BANNER_TOP_RIGHT]), 2), (item: ILandingCfgExt) => (
          <CardColCmp {...item} />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
