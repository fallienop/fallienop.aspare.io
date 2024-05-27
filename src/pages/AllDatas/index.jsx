

import React, { useEffect, useState } from "react";
import Car from "../Car/index";
import styled from "./alldatas.module.scss";
import appcss from "../../App";
import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight, MdOutlineSort } from "react-icons/md";
import basketimage from "../../assets/Cart1.svg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from 'react-modal';
import FilterPage from "../../components/FilterPage/FilterPage";
import avtodetal from '../../assets/6zazG73XmCIVX596eIDD.png'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '67.15vw',
        padding: '',
        maxHeight: '100vh',
        overflowY: 'auto',
        border: '',
        marginTop: '1vw'

    },
};

Modal.setAppElement('#root');

function AllDatas() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [datas, setDatas] = useState([]);
    const mainURL = useSelector(state => state.aspareSlice.mainURL);
    const filters = useSelector(state => state.aspareSlice.filter);
    const [selectedSingleCompany,setSelectedSingleCompany]=useState("")
    const categoryFetcher = async (categoryId) => {
        let resp = await axios.get(`${mainURL}/categories/getbyid/${categoryId}`);
        return resp.data.name;
    }

    const companyFetcher = async (companyId) => {
        let resp = await axios.get(`${mainURL}/companies/${companyId}`);
        return resp.data.name;
    }

    const partFetcher = async () => {
        let resp = await axios.get(`${mainURL}/Parts`);
        let parts = resp.data.result.parts;

        const partsWithCategoryPromises = parts.map(async (part) => {
            const companyName = await companyFetcher(part.companyId);
            const categoryName = await categoryFetcher(part.categoryId);
            return { ...part, companyName, categoryName };
        });

        const partsWithCategories = await Promise.all(partsWithCategoryPromises);
        setDatas(partsWithCategories);
    }

    const partFetcherWithFilter = async () => {
        let queryString = '';
        Object.keys(filters).forEach(x => {

            if (Array.isArray(filters[x])) {
                filters[x].forEach(y => {
                    queryString += `${x}=${y}&`;
                })
            }
            else if (filters[x] != null) {
                queryString += `${x}=${filters[x]}&`;
            }

        })
        queryString = queryString.substring(0, queryString.length - 1);
        let response = await axios.get(`${mainURL}/Parts/getwithfilter?${queryString}`);
        let parts = response.data.parts;
        const partsWithCategoryPromises = parts.map(async (part) => {
            const companyName = await companyFetcher(part.companyId);
            const categoryName = await categoryFetcher(part.categoryId);
            return { ...part, companyName, categoryName };
        });

        const partsWithCategories = await Promise.all(partsWithCategoryPromises);
        setDatas(partsWithCategories);

    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (filters != {}) {
            if(Array.isArray(filters.CompanyId) && filters.CompanyId.length === 1 ){
             console.log(filters.CompanyId[0]);
             singleCompanyFetcher(filters.CompanyId[0]);
            }
            partFetcherWithFilter();
            console.log(filters)
        } else {
            partFetcher();
        }
    }, [filters]);


const singleCompanyFetcher=async (companyid)=>{
var resp=await axios.get(`${mainURL}/companies/${companyid}`);
console.log(resp.data)
setSelectedSingleCompany(resp.data)
}
    useEffect(() => {
        //  console.log(filters)
        partFetcherWithFilter();
    }, [filters])
    return (
        <div className="hr-add">
            <hr />
      
            {Array.isArray(filters.CompanyId) && filters.CompanyId.length === 1 ? (<>      <div className="container">
                    <div className="shops-type-detail">
                        <div className="shops-type-site-detail">
                            <h1>{selectedSingleCompany.name}</h1>
                            <div className="shops-type-detail-text">
                                <div>
                                    <div>
                                        <div>
                                            <i className="fa-solid fa-phone"></i> <p>055 826 26 25</p>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>{" "}
                                            <p>{selectedSingleCompany.address}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <i className="fa-solid fa-globe"></i>
                                            <a href="#">{selectedSingleCompany.website}</a>
                                        </div>
                                        <div>
                                            <i className="fa-regular fa-clock"></i>
                                            <p>{selectedSingleCompany.workStart} - {selectedSingleCompany.workEnd}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <ul>
                                        <li>
                                            <i className="fa-brands fa-youtube"></i>
                                        </li>
                                        <li>
                                            <i className="fa-brands fa-instagram"></i>
                                        </li>
                                        <li>
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </li>
                                        <li>
                                            <i className="fa-brands fa-facebook"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="shops-type-detail-img">
                            <img src={`data:image/png;base64,${selectedSingleCompany.image}`} alt="" />
                        </div>
                    </div>
                </div>
</>):<></>}

        
            <div className="container">
                <section className={styled.header}>
                    <div className={styled.head}>
                        <Link to="/"><span className={styled.home}>Əsas səhifə</span></Link>
                        <span className={styled.arrow}><MdKeyboardArrowRight /></span>
                        <span className={styled.datas}>Detallar</span>
                    </div>
                </section>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <FilterPage closeModal={closeModal} />
                </Modal>

                <div className={styled.filterANDsearch}>
                    <div onClick={openModal} className={styled.filter}>
                        <span><MdOutlineSort /></span>
                        <p>Filter</p>
                    </div>
                    {/* <div className={styled.search}>
            <p>Detal kodu</p>
            <span><IoSearchOutline /></span>
          </div> */}
                </div>

          
                <section className={styled.favorite}>
                    {datas.map((data) => (
                        <a key={data.id} >
                            <div className="row">
                                <div className="result-list favoritepage">
                                    <div className="favorite-block">
                                        <div className={styled.block}>
                                            <div className="favoriteimg">
                                                <img style={{  height: '300px',objectFit:"cover" }} src={`data:image/png;base64,${data.image1}`} alt="" />
                                                <p style={{ zIndex: '0' }} className="favorite-img-text">{data.categoryName}</p>
                                            </div>
                                            <div className={styled.text}>
                                                <div className={styled.name}>
                                                    <p>{data.name}</p>
                                                    <h5>
                                                        <span><TiTick /></span>
                                                        {data.companyName}
                                                    </h5>
                                                </div>
                                                <div className={styled.priceANDcount}>
                                                    <div className={styled.price}>
                                                        <div className={styled.priceNumber}>
                                                            <span><FaManatSign /></span>
                                                            <span>{data.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/itemdetails/${data.id}`}>
                                            <div className="basket-class">
                                                <p>Keçid et</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default AllDatas;
