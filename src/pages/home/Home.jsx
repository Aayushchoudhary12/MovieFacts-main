import React from 'react';

import './home.scss';

import Banner from './Banner/Banner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

export default function Home() {
  return (
    <div className="homePage">
      <Banner/>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
