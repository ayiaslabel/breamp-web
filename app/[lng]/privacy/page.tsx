import React from 'react';
import PrivacyMobile from '@[lng]/components/Main/PrivacyMobile';

function Page({ params: { lng } }: LanguageProps) {
  return (
    <section>
      <PrivacyMobile lng={lng} />
    </section>
  );
}

export default Page;
