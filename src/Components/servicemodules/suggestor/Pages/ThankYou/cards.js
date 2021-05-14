import React from 'react';
import "./card.css";
import SingleCard from "./singleCard";

export default function Cards() {
  return (
    <div >
      <div class="trow">
        <div class="tcolumn">
          <SingleCard
            imgUrl={
              "https://images.unsplash.com/photo-1593481527525-eb0779677c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            }
            title={"Transport"}
            detail={"Explore for transport services"}
            link={"/transport"}
          />
        </div>

        <div class="tcolumn">
          <SingleCard
            imgUrl={
              "https://images.unsplash.com/photo-1504807959081-3dafd3871909?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
            }
            title={"Tour Guides"}
            detail={"Explore for transport services"}
            link={"/guide"}
          />
        </div>

        <div class="tcolumn">
          <SingleCard
            imgUrl={
              "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80"
            }
            title={"Hotels"}
            detail={"Explore for transport services"}
            link={"/hotel"}
          />
        </div>

        <div class="tcolumn">
          <SingleCard
            imgUrl={
              "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }
            title={"Events"}
            detail={"Explore for transport services"}
            link={"/events"}
          />
        </div>
      </div>
    </div>
  );
}
