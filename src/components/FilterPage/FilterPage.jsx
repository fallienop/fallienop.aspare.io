

import React, { useEffect, useState, useRef } from 'react';
import style from './FilterPage.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AsyncSelect from 'react-select/async';
import CustomSliderStyles from './Customs/CustomSliderStyles';
import { customSelectStyle, customModelSelectStyle } from './Customs/CustomSelectStyles';
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';
import { filterSetter } from '../../helpers/Redux/aspareSlicer';

const FilterPage = ({ closeModal }) => {
    const mainURL = useSelector(x => x.aspareSlice.mainURL);
    const dispatch = useDispatch();
    const [sliderValues, setSliderValues] = useState([0, 9000]);
    const minDistance = 2;
    const filters = useSelector(state => state.aspareSlice.filter);

    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [brandList, setBrandList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);


    const getCompanies = async () => {
        await axios.get(`${mainURL}/companies`).then(result => {
            const res = result.data.result.companies.map(x => ({ value: x.id, label: x.name }));
            setCompanyList(res);
        })
    };

    const getCategories = async () => {
        await axios.get(`${mainURL}/categories`).then(result => {
            const res = result.data.map(x => ({ value: x.id, label: x.name }));
            setCategoryList(res);
        })
    };

    const getBrands = async () => {
        await axios.get(`${mainURL}/brands`).then(result => {
            // console.log(result.data)
            let res = result.data.brands.map(x => ({ value: x.id, label: x.name }));
            if(filters.BrandId){
              res=res.filter(x=>filters.BrandId.includes(x.brandId))
            }
            setBrandList(res);
        })
    };

    const getMakes = async () => {
        await axios.get(`${mainURL}/Makes`).then(result => {
            const res = result.data.makes.map(x => ({ value: x.id, label: x.name }));
            setMakeList(res);
        })
    };

    const modelValue = useRef();

    useEffect(() => {
        console.log(filters);
        console.log([]);
        getMakes();
        getBrands();
        getCompanies();
        getCategories();
    }, []);

    // const fetchData = async (url, setter) => {
    //     try {
    //         const result = await axios.get(url);
    //         const data = result.data;
    //         setter(data.map(item => ({ value: item.id, label: item.name })));
    //     } catch (error) {
    //         console.error("Error fetching data", error);
    //     }
    // };



    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return;

        if (activeThumb === 0) {
            setSliderValues([Math.min(newValue[0], sliderValues[1] - minDistance), sliderValues[1]]);
        } else {
            setSliderValues([sliderValues[0], Math.max(newValue[1], sliderValues[0] + minDistance)]);
        }
    };

    const handleMakeSelect = async (e) => {
        try {
            const result = await axios.get(`${mainURL}/Models/getmodels/${e.value}`);
            const models = result.data.models.map(x => ({ value: x.id, label: x.name }));
            setModelList(models);
            modelValue.current.clearValue();
        } catch (error) {
            console.error("Error fetching models", error);
        }
    };

    const yearsOptions = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => ({
        value: new Date().getFullYear() - i,
        label: (new Date().getFullYear() - i).toString()
    }));

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);

    const handleFilterSubmit = async () => {
        const filterData = {
            MinimumPrice: sliderValues[0],
            MaximumPrice: sliderValues[1],
            CategoryId: selectedCategory ? selectedCategory.value : null,
            BrandId: selectedBrand.map(b => b.value),
            CompanyId: selectedCompany.map(c => c.value),
            ModelId: selectedModel ? selectedModel.value : null,
            Year: selectedYear ? selectedYear.value : null,
        };
    

        dispatch(filterSetter(filterData))
   
    };

    return (
        <div className={style.main}>
            <div className={style.top}>
                <p className={style.closeButton} onClick={closeModal}>x</p>
                <p>Filter</p>
            </div>

            <div className={style.content}>
                <div className={style.price}>
                    <p className={style.titleStyle}>Qiymət</p>
                    <hr />
                    <div className={style.minmax}>
                        <div className={style.min}>
                            <p>Min</p>
                            <input value={sliderValues[0]} onChange={e => {
                                setSliderValues([Math.min(e.target.value, sliderValues[1] - minDistance), sliderValues[1]]);
                            }} type="number" />
                        </div>
                        <div className={style.max}>
                            <p>Max</p>
                            <input value={sliderValues[1]} onChange={e => {
                                setSliderValues([sliderValues[0], Math.max(e.target.value, sliderValues[0] + minDistance)]);
                            }} type="number" />
                        </div>
                    </div>
                    <div className={style.priceSlider}>
                        <Box sx={{ width: "62.44vw" }}>
                            <Slider sx={CustomSliderStyles}
                                value={sliderValues}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={9000}
                                disableSwap
                            />
                        </Box>
                    </div>
                </div>

                <div className={style.category}>
                    <p className={style.titleStyle}>Category</p>
                    <AsyncSelect styles={customSelectStyle} onChange={setSelectedCategory} defaultOptions={categoryList} />
                </div>

                <div className={style.brand}>
                    <p className={style.titleStyle}>Brand</p>
                    <AsyncSelect isMulti styles={customSelectStyle} onChange={setSelectedBrand} defaultOptions={brandList} />
                </div>

                <div className={style.company}>
                    <p className={style.titleStyle}>Company</p>
                    <AsyncSelect isMulti styles={customSelectStyle} onChange={setSelectedCompany} defaultOptions={companyList} />
                </div>

                <div className={style.MakeAndModel}>
                    <div className={style.make}>
                        <p className={style.titleStyle}>Marka</p>
                        <AsyncSelect styles={customModelSelectStyle} defaultOptions={makeList} onChange={handleMakeSelect} />
                    </div>
                    <div className={style.make}>
                        <p className={style.titleStyle}>Model</p>
                        <AsyncSelect styles={customModelSelectStyle} onChange={setSelectedModel} defaultOptions={modelList} ref={modelValue} />
                    </div>
                </div>

                <div className={style.year}>
                    <p className={style.titleStyle}>Buraxılış ili</p>
                    <AsyncSelect styles={customModelSelectStyle} onChange={setSelectedYear} defaultOptions={yearsOptions} />
                </div>

                <div className={style.submitButton}>
                    <button style={{ marginBlock: "1vw" }} className='btn btn-success' onClick={handleFilterSubmit}>Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;