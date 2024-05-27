import React, { useState, useEffect } from "react";
import styled from "./category.module.scss";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { filterSetter } from "../../helpers/Redux/aspareSlicer";
const Category = () => {
  const dispatch=useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const navigate=useNavigate();
  const [detailCode,setDetailCode]=useState("")
  const [visibleCategories, setVisibleCategories] = useState(8);
  const [categories, setCategories] = useState([]);
  const mainURL = useSelector(state => state.aspareSlice.mainURL);
  const getCategories = async () => {
    const response = await axios.get(`${mainURL}/categories`);
    setCategories(response.data)
    // console.log(response.data)
  }
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1203) {
        setVisibleCategories(9);
      }
      else if (width >= 1194) {
        setVisibleCategories(8);
      } else if (width >= 1188) {
        setVisibleCategories(7);
      } else if (width >= 1007) {
        setVisibleCategories(6);
      } else if (width >= 506) {
        setVisibleCategories(5);
      } else {
        setVisibleCategories(4);
      }
    };



    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 12 - visibleCategories));
  };
  const handleCategorySelect = (categoryid) => {
    dispatch(filterSetter({
     categoryId: categoryid
    }));
    navigate('/alldatas');

 }
 
 const handleDetailCodeSearch = (detailCode) => {
  dispatch(filterSetter({
    detailCode: detailCode
  }));
  navigate('/alldatas');
}
  const renderCategories = () => {
   
    return categories.slice(startIndex, startIndex + visibleCategories).map((category, index) => (
      <div  className={styled.category} key={index}>
        <div onClick={e=>handleCategorySelect(category.id)}>
          <img style={{ width: '40px', height: '40px' }} src={`data:image/png;base64,${category.image}`} alt="Category Image" />
          <p>{category.name}</p>
        </div>
      </div >
    ));
  };

  

  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className={styled.categories}>
              <div className={styled.arrow} onClick={handleLeftArrowClick}>
                <span>
                  <MdKeyboardArrowLeft />
                </span>
              </div>
              {renderCategories()}
              <div className={styled.arrow} onClick={handleRightArrowClick}>
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className={styled.filterANDsearch}>
              <div className={styled.search}>
                <input onChange={e=>setDetailCode(e.target.value)} type="text" placeholder="Detal kodu" />
                <span>
                  <IoSearchOutline onClick={e=>handleDetailCodeSearch(detailCode)}/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
