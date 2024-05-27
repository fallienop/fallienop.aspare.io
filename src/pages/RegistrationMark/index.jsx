import React, { useEffect, useState } from "react";
import styled from "./registration.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const RegistrationMark = () => {
  const mainURL = useSelector((state) => state.aspareSlice.mainURL);
  const [plates, setPlates] = useState([]);
  const [searchQueryNum, setSearchQueryNum] = useState("");
  const [searchQueryLetter1, setSearchQueryLetter1] = useState("");
  const [searchQueryLetter2, setSearchQueryLetter2] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortBy, setSortBy] = useState("");
  const formatName = (name) => {
    return `${name.slice(0, 2)} -${name.slice(2, 4)} -${name.slice(4)}`;
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const formattedDate = date.toLocaleDateString("tr-TR");
    const formattedTime = date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <>
        <span>{formattedDate},</span>
        <span>{formattedTime}</span>
      </>
    );
  };

  const getPlates = async () => {
    const response = await axios.get(`${mainURL}/plates`);
    // console.log(response.data.result.plates);
    setPlates(response.data.result.plates);
  };

  useEffect(() => {
    getPlates();
  }, []);

  const filteredPlates = plates.filter((plate) => {
    const lastThreeDigitsMatch = plate.number
      .slice(-3)
      .includes(searchQueryNum);
    const letter1Match =
      searchQueryLetter1 === "" ||
      plate.number.slice(2, 3).toUpperCase() ===
      searchQueryLetter1.toUpperCase();
    const letter2Match =
      searchQueryLetter2 === "" ||
      plate.number.slice(3, 4).toUpperCase() ===
      searchQueryLetter2.toUpperCase();
    const cityMatch =
      selectedCity === "" || plate.number.slice(0, 2) === selectedCity;
    return lastThreeDigitsMatch && letter1Match && letter2Match && cityMatch;
  });

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const sortedPlates = filteredPlates.sort((a, b) => {
    if (sortBy === "asc") {
      return a.price - b.price;
    } else if (sortBy === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });
  return (
    <section className={styled.registration}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.search}>
              <div className={styled.city}>
                <select
                  name="region_number"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Bütün şəhərlər</option>
                  <option value="01">01-Abşeron</option>
                  <option value="02">02-Ağdam</option>
                  <option value="03">03-Ağdaş</option>
                  <option value="04">04-Ağcabədi</option>
                  <option value="05">05-Ağstafa</option>
                  <option value="06">06-Ağsu</option>
                  <option value="07">07-Astara</option>
                  <option value="08">08-Balakən</option>
                  <option value="09">09-Bərdə</option>
                  <option value="10">10-Bakı</option>
                  <option value="11">11-Beyləqan</option>
                  <option value="12">12-Biləsuvar</option>
                  <option value="14">14-Cəbrayıl</option>
                  <option value="15">15-Cəlilabad</option>
                  <option value="16">16-Daşkəsən</option>
                  <option value="17">17-Şabran</option>
                  <option value="18">18-Şirvan</option>
                  <option value="19">19-Füzuli</option>
                  <option value="20">20-Gəncə</option>
                  <option value="21">21-Gədəbəy</option>
                  <option value="22">22-Goranboy</option>
                  <option value="23">23-Göyçay</option>
                  <option value="24">24-Hacıqabul</option>
                  <option value="25">25-Xanlar</option>
                  <option value="26">26-Xankəndi</option>
                  <option value="27">27-Xaçmaz</option>
                  <option value="28">28-Xocavənd</option>
                  <option value="29">29-Xızı</option>
                  <option value="30">30-İmişli</option>
                  <option value="31">31-İsmayıllı</option>
                  <option value="32">32-Kəlbəcər</option>
                  <option value="33">33-Kürdəmir</option>
                  <option value="34">34-Qax</option>
                  <option value="35">35-Qazax</option>
                  <option value="36">36-Qəbələ</option>
                  <option value="37">37-Qobustan</option>
                  <option value="38">38-Qusar</option>
                  <option value="39">39-Qubadlı</option>
                  <option value="40">40-Quba</option>
                  <option value="41">41-Laçın</option>
                  <option value="42">42-Lənkəran</option>
                  <option value="43">43-Lerik</option>
                  <option value="44">44-Masallı</option>
                  <option value="45">45-Mingəçevir</option>
                  <option value="46">46-Naftalan</option>
                  <option value="47">47-Neftçala</option>
                  <option value="48">48-Oğuz</option>
                  <option value="49">49-Saatlı</option>
                  <option value="50">50-Sumqayıt</option>
                  <option value="51">51-Samux</option>
                  <option value="52">52-Salyan</option>
                  <option value="53">53-Siyəzən</option>
                  <option value="54">54-Sabirabad</option>
                  <option value="55">55-Şəki</option>
                  <option value="56">56-Şamaxı</option>
                  <option value="57">57-Şəmkir</option>
                  <option value="58">58-Şuşa</option>
                  <option value="59">59-Tərtər</option>
                  <option value="60">60-Tovuz</option>
                  <option value="61">61-Ucar</option>
                  <option value="62">62-Zaqatala</option>
                  <option value="63">63-Zərdab</option>
                  <option value="64">64-Zəngilan</option>
                  <option value="65">65-Yardımlı</option>
                  <option value="66">66-Yevlax</option>
                  <option value="67">67-Babək</option>
                  <option value="68">68-Şərur</option>
                  <option value="69">69-Ordubad</option>
                  <option value="70">70-Naxçıvan</option>
                  <option value="71">71-Şahbuz</option>
                  <option value="72">72-Culfa</option>
                  <option value="73">73-Sədərək </option>
                  <option value="74">74-Kəngərli</option>
                  <option value="75">75-Naxçıvan</option>
                  <option value="85">85-Naxçıvan</option>
                  <option value="90">90-Bakı</option>
                  <option value="99">99-Azərbaycan</option>
                  <option value="77">77-Bakı</option>
                </select>
              </div>
              <div className={styled.letter}>
                <select
                  value={searchQueryLetter1}
                  onChange={(e) => setSearchQueryLetter1(e.target.value)}
                >
                  <option value="">-</option>
                  {letters.map((letter) => (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styled.letter}>
                <select
                  value={searchQueryLetter2}
                  onChange={(e) => setSearchQueryLetter2(e.target.value)}
                >
                  <option value="">-</option>
                  {letters.map((letter) => (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styled.number}>
                <input
                  type="text"
                  value={searchQueryNum}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,3}$/.test(value)) {
                      setSearchQueryNum(value);
                    }
                  }}
                  maxLength={3}
                  pattern="\d*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.card}>
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-12">
              <div className={styled.filter}>
                <div className={styled.result}>
                  <p>
                    <strong>{filteredPlates.length}</strong> nəticə tapıldı
                  </p>
                </div>
                <div className={styled.products}>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="">Çeşidləmək</option>
                    <option value="asc">Əvvəlcə ucuz</option>
                    <option value="desc">Əvvəlcə bahalı</option>
                  </select>
                </div>
              </div>
            </div>
            {filteredPlates.map((x) => (
              <div key={x.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <Link to={`/markDetails/${x.id}`}>
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
                        <h3>{formatName(x.number)}</h3>
                      </div>
                    </div>
                    <hr />
                    <div className={styled.info}>
                      <div className={styled.name}>
                        <p>{x.name}</p>
                      </div>
                      <div className={styled.date}>
                        {formatDateTime(x.createdDate)}
                      </div>
                    </div>
                    <div className={styled.price}>
                      <span>{x.price}₼</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default RegistrationMark;