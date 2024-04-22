// import React, { useContext } from "react";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
 import { img_base_url } from "../components/Movie";

export default function MovieDetail() {

    const {title} = useParams()
    const {state} = useLocation()

  //  console.log(title)
  //  console.log(state)
  return (
    <div className="page-container">
      <div className="detail_box">
        <div className="img_box">
          <img 
          src={img_base_url + state.poster_path} 
          alt="영화포스터이미지"/>
        </div>
        <div className="content_box">
          <div className="title_box">
            <span className="average">평점 : {state.vote_average}</span>
            <span className="title">{title}</span>
          </div>
          <div className="overview">{state.overview}</div>
        </div>
      </div>
    </div>
  )
}