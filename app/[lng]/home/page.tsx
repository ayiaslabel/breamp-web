import React from 'react';
import TermsMobile from '@[lng]/components/Main/TermsMobile';
import BookMobile from '@[lng]/components/Home/BookMobile';

function Page({ params: { lng } }: LanguageProps) {
  return (
    <section>
      <BookMobile lng={lng} />
    </section>
  );
}

export default Page;
