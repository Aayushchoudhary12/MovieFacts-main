import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';

import './trending.scss';

import Carousel from '../../../components/carousel/Carousel';

export default function Trending() {
    const [endpoint, setEndPoint] = useState("day");
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
        console.log(data);
    }

  return (
      <div className="carouselSection">
          <ContentWrapper>
              <div className="carouselWrapper">
              <span className="carouselTitle">Trending</span>
              <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
              </div>
          </ContentWrapper>
          <Carousel data={data?.results} loading={loading} />
      </div>
  )
}
