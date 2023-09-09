import { ImageElm } from 'components/image/ImageCmp';

const HeroBanner = () => {
  return (
    <div className="grid grid-nogutter surface-section text-800 ">
      <div className="col-12 md:col-9 mobileActiveShowNone px-1">
        <div className="grid align-items-center px-4">
          <div className="col-8 nested-grid text-center md:text-left align-items-center mobileActiveShowNone">
            <section>
              <span className="uppercase block text-3xl font-bold mb-1">sub_title</span>
              <div className="uppercase text-6xl font-bold my-2">title</div>
              <span className="uppercase block text-2xl font-bold my-2 lablelRed">discount</span>
              <p className="mt-0 mb-4 text-900 text-xl line-height-3">description</p>
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
