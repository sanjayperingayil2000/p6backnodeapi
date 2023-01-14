import React from "react";
import More from "./more";
import More1 from "./more1";
import Last from "./last";
import '../app.css'
import '../index.css'

const Xxx = (props) => {
  const data=props.data;
  const data1=props.data1;
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="inl st655">
        {
      data && data.map((val)=>{
        return(
          <>
            <More img={val.img} content={val.content} head={val.head} head1={val.head1}  />
          </>
        )
      })
    }
          {/* <More data={data} /> */}
          <hr />
          <br />
          <br />
          <div className="picb">
            <span className="btxt ttp">
              <h1>You see Trees !!</h1>
              <h2>We see heaven of peacefulness</h2>
            </span>
          </div>
        </div>
        <div className="inl fff1">
          <div className="ad">
            <span className="vrt">Advertisement</span>
          </div>
          <br />
          <br />
          <h2>Top Views</h2>
          <div className="blne"></div> <br />
          <div className="img11"></div>
          <div>
            <br />
            <h3>Enjoy the moments</h3>
            For other uses, see Mother Earth. For the song, see Mother
            Nature.For environmental organization, see Mother Nature Cambodia.
            <br />
            <br />
            Travel /{" "}
            <font style={{ color: "#0202" }}> I like these in 2020</font>
          </div>
          {
      data1 && data1.map((val)=>{
        return(
          <>
            <More1 img={val.img} content={val.content} head={val.head} />
          </>
        )
      })
    }
          {/* <More1 data={data1} /> */}
          <br />
          <hr />
        </div>
      </div>
      <h2>The Latest</h2>
      <div className="blne"></div>
      <hr />
      <br />
      <div className="d-flex justify-content-around svs">
        <Last /><br/><br/>
        <Last /><br/><br/>
        <Last />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </>
  );
};

export default Xxx;
