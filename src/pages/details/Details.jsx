import React from 'react';
import { useParams } from 'react-router';

import './details.css';

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideoSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendations';

export default function Details() {
  const { mediaType, id} = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
 
  return (
    <>
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    <Cast data={credits?.cast} loading={creditsLoading} />
    <VideosSection data={data} loading={loading} />
    <Similar mediaType={mediaType} id={id} />
    <Recommendation mediaType={mediaType} id={id} />
    </>
  )
}