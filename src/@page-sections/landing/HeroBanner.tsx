import { ImageElm } from 'components/image/ImageCmp';
import { filter, first } from 'lodash';
import Link from 'next/link';
import { getProductLinkRedirect } from 'utils/product-operations';

const HeroBanner = ({ dataSet }) => {
  const mainBanner = first(filter(dataSet, ['landing_section.code', 'landing_main_carousel']));

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
              <Link
                href={getProductLinkRedirect(mainBanner?.product)}
                passHref
                className="capitalize p-button p-button-rounded p-button-raised text-xl border-none mt-3 font-normal line-height-3 px-3  btnBlack"
              >
                {mainBanner?.btn_label}
              </Link>
            </section>
          </div>
          <div className="col-4 overflow-hidden flex justify-content-end ">
            <ImageElm src="/assets/landing/banner_hero.png" alt="hero-1" height={450} />
          </div>
        </div>
      </div>
      <div className="col-12 md:col-3">
        <div className="font-bold border-round h-17rem text-start p-3 border-round-sm">
          <div className="shadow-2 border-round h-full w-full p-3 surface-card">
            <div className="block text-xl font-bold mt-4 uppercase">title</div>
            <div className="text-xl text-orange-500 font-bold my-3 uppercase">sub_title</div>
            <button className="p-button p-component p-button-link p-button-text text-xl border-none p-button-raised">
              <span className="p-button-label capitalize">btn_label</span>
              <i className="pi pi-arrow-right text-sm ml-2"></i>
            </button>
          </div>
        </div>
        <div className="font-bold border-round h-17rem text-start p-3 border-round-sm">
          <div className="shadow-2 border-round h-full w-full p-3 surface-card">
            <div className="block text-xl font-bold mt-4 uppercase">title</div>
            <div className="text-xl text-orange-500 font-bold my-3 uppercase">sub_title</div>
            <button className="p-button p-component p-button-link p-button-text text-xl border-none p-button-raised">
              <span className="p-button-label capitalize">btn_label</span>
              <i className="pi pi-arrow-right text-sm ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
