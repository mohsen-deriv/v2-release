import { Breadcrumbs, PageLayout } from '@deriv-com/components';
import WhoWeAreHero from './sections/hero';
import { WhoWeAreValues } from './sections/our-values';
import WhoWeArePrinciples from './sections/our-principles';
import WhoWeAreNumbers from './sections/deriv-in-numbers';
import WhoWeAreLocations from './sections/our-locations';
import MissionContent from './sections/mission-content';
import { FluidContainer } from '@deriv/quill-design';

export function WhoWeAreTemplate() {
  return (
    <PageLayout>
      <FluidContainer>
        <Breadcrumbs
          className="py-general-md"
          links={[
            {
              content: 'Home',
              href: '/',
            },
            {
              content: 'Who we are',
              href: '/',
            },
          ]}
        />
      </FluidContainer>
      <WhoWeAreHero />
      <MissionContent />
      <WhoWeAreValues />
      <WhoWeArePrinciples />
      <WhoWeAreNumbers />
      <WhoWeAreLocations />
    </PageLayout>
  );
}

export default WhoWeAreTemplate;
