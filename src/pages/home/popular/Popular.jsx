import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';

import './popular.scss';

import Carousel from '../../../components/carousel/Carousel';

export default function Popular() {
    const [endpoint, setEndPoint] = useState("movie");

    const {data, loading} = useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
        console.log(data);
    }

  return (
      <div className="carouselSection">
          <ContentWrapper>
              <div className="carouselWrapper">
              <span className="carouselTitle">What's Popular</span>
              <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
              </div>
          </ContentWrapper>
          <Carousel 
            data={data?.results} 
            loading={loading}
             endpoint={endpoint}
            />
      </div>
  )
}
