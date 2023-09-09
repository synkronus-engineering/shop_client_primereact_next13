import HeroBanner from '@page-sections/landing/HeroBanner';
import { supabaseClient } from 'lib/supabase';

//landing_main_carousel, landing_right_top_section
async function fetchLandingTopCfg() {
  return await supabaseClient().from('landing_top_cfg').select(`*, product: products(*), landing_section: ref_generic_list_sub(*)`).eq('active', true).order('id', { ascending: true });
}

const Page = async () => {
  const { data } = await fetchLandingTopCfg();

  return (
    <div className="surface-0  justify-content-center">
      <div className="landing-wrapper overflow-hidden">
        <HeroBanner dataSet={data} />
      </div>
    </div>
  );
};
export default Page;
