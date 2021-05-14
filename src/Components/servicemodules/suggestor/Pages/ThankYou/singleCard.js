import React from 'react';
import "./card.css";
import {Link} from 'react-router-dom'

export default function SingleCard(props) {
  return (
    <div>
      <div class="tflip-card-container">
        <div class="tflip-card">
          <div class="tcard-front">
            <tfigure>
              <div class="timg-bg"></div>
              <img src={props.imgUrl} alt="prop img" />
              <tfigcaption>{props.title}</tfigcaption>
            </tfigure>

            <tul>
              <tli>{props.detail}</tli>
            </tul>
          </div>

          <div class="tcard-back">
            <tfigure>
              <div class="timg-bg"></div>
              <img src={props.imgUrl} alt="prop img" />
            </tfigure>

            <Link to={props.link}><tbutton>Explore!</tbutton></Link>

            <div class="tdesign-container">
              <span class="tdesign tdesign--1"></span>
              <span class="tdesign tdesign--2"></span>
              <span class="tdesign tdesign--3"></span>
              <span class="tdesign tdesign--4"></span>
              <span class="tdesign tdesign--5"></span>
              <span class="tdesign tdesign--6"></span>
              <span class="tdesign tdesign--7"></span>
              <span class="tdesign tdesign--8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
