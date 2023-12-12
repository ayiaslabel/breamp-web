import React from 'react';
import ServerMobile from '@[lng]/components/Main/ServerMobile';

function Page({ params: { lng } }: LanguageProps) {
  return (
    <section>
      <ServerMobile lng={lng} />
    </section>
  );
}

export default Page;
