import React from 'react';
import TermsMobile from '@[lng]/components/Main/TermsMobile';

function Page({ params: { lng } }: LanguageProps) {
  return (
    <section>
      <TermsMobile lng={lng} />
    </section>
  );
}

export default Page;
