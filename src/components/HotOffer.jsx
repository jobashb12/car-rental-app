import React from "react";
import { useLocation } from "react-router-dom";
import CommonHead from "../components/CommonHead";
import CarData from "../assets/data/carData";
import "../styles/HotOffer.css";
import CarSection from "./CarSection";

const HotOffer = ({ item, select }) => {
    const location = useLocation();
    return (
        <div className="hot-offer">
            {location.pathname === "/home" && (
                <CommonHead heading="Come with" title="Hot Offers" />
            )}
            <div className="offer-body">
                {item
                    ? CarData.slice(0, 6).map(d => {
                          return (
                              <CarSection
                                  id={d.id}
                                  imgUrl={d.imgUrl}
                                  brand={d.brand}
                                  carName={d.carName}
                                  price={d.price}
                                  model={d.model}
                                  automatic={d.automatic}
                                  speed={d.speed}
                              />
                          );
                      })
                    : select
                    ? CarData.sort((a, b) => b.price - a.price).map(d => {
                          return (
                              <CarSection
                                  id={d.id}
                                  imgUrl={d.imgUrl}
                                  brand={d.brand}
                                  carName={d.carName}
                                  price={d.price}
                                  model={d.model}
                                  automatic={d.automatic}
                                  speed={d.speed}
                              />
                          );
                      })
                    : CarData.sort((a, b) => a.price - b.price).map(d => {
                          return (
                              <CarSection
                                  id={d.id}
                                  imgUrl={d.imgUrl}
                                  brand={d.brand}
                                  carName={d.carName}
                                  price={d.price}
                                  model={d.model}
                                  automatic={d.automatic}
                                  speed={d.speed}
                              />
                          );
                      })}
            </div>
        </div>
    );
};

export default HotOffer;
