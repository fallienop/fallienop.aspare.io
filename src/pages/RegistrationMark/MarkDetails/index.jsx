import React, { useEffect, useState } from "react";
import styled from "./markdetails.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const MarkDetails = () => {
  const mainURL = useSelector((state) => state.aspareSlice.mainURL);
  const [plates, setPlates] = useState({});
  const [announcement, setAnnouncement] = useState([]);
  const [selectedPlate, setSelectedPlate] = useState(null);

  const { id } = useParams();

  const getPlates = async () => {
    try {
      const resp = await axios.get(`${mainURL}/Plates/${id}`);
      setPlates(resp.data.plate);
      setSelectedPlate(resp.data.plate);
      // console.log(resp.data.plate);
    } catch (error) {
      console.error("Error fetching part data:", error);
    }
  };

  useEffect(() => {
    getPlates();
  }, [mainURL]);

  useEffect(() => {
    fetch(`${mainURL}/Plates`)
      .then((response) => response.json())
      .then((data) => {
        setAnnouncement(data.result.plates);
        // console.log(data);
      })
      .catch((error) => console.error("Error fetching announcements:", error));
  }, [mainURL]);

  const formatName = (name) => {
    if (!name || name.length < 6) return name;
    return `${name.slice(0, 2)}-${name.slice(2, 4)}-${name.slice(4)}`;
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("tr-TR");
    return (
      <>
        <span>{formattedDate},</span>
      </>
    );
  };

  const formatNum = (num) => {
    return num ? num.slice(0, 3) : "";
  };

  const handleCardClick = (plate) => {
    setSelectedPlate(plate);
  };

  return (
    <section className={styled.markDetails}>
      <div className={styled.detail}>
        <div
          className="row g-3"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {selectedPlate && (
            <>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div className={styled.number}>
                  <div className={styled.logo}>
                    <svg
                      width="25"
                      height="15"
                      viewBox="0 0 19 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3915_8889"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="19"
                        height="11"
                        style={{ marginRight: 10 }}
                      >
                        <path
                          d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_3915_8889)">
                        <path
                          d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                          fill="#E3002E"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 7H19V11H0V7Z"
                          fill="#00AF62"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0H19V4H0V0Z"
                          fill="#0097C5"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                          fill="#FBDCE2"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                          fill="white"
                        ></path>
                      </g>
                    </svg>
                    <span>AZ</span>
                  </div>
                  <div className={styled.num}>
                    <h3>{formatName(selectedPlate.number)}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <div className={styled.price}>
                  <p>{selectedPlate.price} ₼</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <div className={styled.info}>
                  <div className={styled.date}>
                    <p>Yerləşmə tarixi:</p>
                    <span>{formatDate(selectedPlate.createdDate)}</span>
                  </div>
                  <div className={styled.numberOf}>
                    <p>Elanın nömrəsi:</p>
                    <span>{formatNum(selectedPlate.id)}</span>
                  </div>
                  <div className={styled.view}>
                    <p>Baxış sayı:</p>
                    <span>10</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <div className={styled.user}>
                  <div className={styled.name}>
                    <span>
                      <FaUser />
                    </span>
                    <p>{selectedPlate.name}</p>
                  </div>
                  <div className={styled.telephone}>
                    <span>
                      <BsFillTelephoneFill />
                    </span>
                    <p>{selectedPlate.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <div className={styled.location}>
                  <span className={styled.icon}>
                    <MdLocationPin />
                  </span>
                  <span className={styled.city}>{selectedPlate.location}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className={styled.announce}>
            <h2>Son elanlar</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={styled.card}>
            <div className="row g-3" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              {announcement.map((p) => (
                <div
                  key={p.id}
                  className="col-lg-2 col-md-4 col-sm-6 col-6"
                  onClick={() => handleCardClick(p)}
                >
                  <div className={styled.block}>
                    <div className={styled.number}>
                      <div className={styled.logo}>
                        <svg
                          width="19"
                          height="11"
                          viewBox="0 0 19 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_3915_8889"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="19"
                            height="11"
                            style={{ marginRight: 10 }}
                          >
                            <path
                              d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                              fill="white"
                            ></path>
                          </mask>
                          <g mask="url(#mask0_3915_8889)">
                            <path
                              d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                              fill="#E3002E"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 7H19V11H0V7Z"
                              fill="#00AF62"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0H19V4H0V0Z"
                              fill="#0097C5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                              fill="#FBDCE2"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                              fill="white"
                            ></path>
                          </g>
                        </svg>
                        <span>AZ</span>
                      </div>
                      <div className={styled.num}>
                        <h3>{formatName(p.number)}</h3>
                      </div>
                    </div>
                    <hr />
                    <div className={styled.info}>
                      <div className={styled.name}>
                        <p>{p.name}</p>
                      </div>
                      <div className={styled.date}>
                        {formatDate(p.createdDate)}
                      </div>
                    </div>
                    <div className={styled.price}>
                      <span>{p.price}₼</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkDetails;