import React, { useRef, useEffect, useState } from "react";
// import { gigs } from "../data";
import GigCard from "../components/GigCard";
import "../styles/Gigs.css";
import downIcon from "../assets/down.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],

    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort, refetch]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="gigsContainer">
        <span className="breadcrumbs">Codelance {">"} Development</span>
        <h1>Development</h1>
        <p>
          Explore the boundaries of development and technology with CodeLance.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button className="budgetbutton" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by :</span>
            <span className="sortType" onClick={() => setOpen(!open)}>
              {sort === "sales" ? "Best Selling" : "Newest"}

              <img src={downIcon} alt="" onClick={() => setOpen(!open)} />
            </span>
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        {/* <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div> */}

        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
