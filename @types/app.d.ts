interface LanguageCompProps {
  lng: string;
}

interface LanguageProps {
  params: LanguageCompProps;
}

type NftType = {
  id: number;
  img: string;
  end_dtm?: string;
};

type NftAttrType = {
  name: string;
  img: string;
  stat: string;
};
type NftSkillType = {
  img: string;
  type: string;
  name: string;
  desc: string;
};
type NftStatType = {
  count: number;
  win: number;
  pick: number;
  kda: number;
};
type NftInfoType = {
  id: number;
  img: string;
  title: string;
  name: string;
  type: string;
  background: string;
  level: number;
  balance: number;
  desc: string;
  end_dtm?: string;
  attr: NftAttrType[];
  skill: NftSkillType[];
  stat: NftStatType[];
};
