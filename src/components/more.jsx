import React from "react";
import "../app.css";
import { Link } from "react-router-dom";

export default function More(props) {
  // const data = props.data;
  // console.log(data,"datamore");
  return (
    <>
      {/* {
      data && data.map((val) => {
        return (
          <> */}
            <hr />
            <br />
            <Link
              to="/openview" state={{ data: props}}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="d-flex align-items-center bst">
                <img className="picl1 pdd" src={props.img} alt=""></img>
                <div className="pdd">
                  <h5>{props.head}</h5>
                  <h5>{props.head1}</h5>
                  <span className="font-weight-light fs-6">{props.content}</span>
                  <br />
                  <br />
                  <br />
                  <footer className="blockquote-footer mb-0 mr-0 fs-5">
                    $anjay Pering@yil
                  </footer>
                </div>
              </div>
            </Link>
            <br />
          {/* </>
        );
      })
      } */}
    </>
  );
}
