import React, { useState, useEffect } from 'react';
import Region from '../components/Region';

function RegionsPage() {
    const [regionsData, setRegionsData] = useState(null);
    const [inputSearchRegion, setInputSearchRegion] = useState(null);
    const [sort, setSort] = useState(null);

    useEffect(() => {
        const searchRegion = setTimeout(() => {
            fetch(`http://localhost:3000/regions/?_sort=libraries&_order=${sort}`)
                .then(res => res.json())
                .then(json => {
                    inputSearchRegion > "" ? setRegionsData(json.filter(item => {
                        return item.fullname.toLowerCase().includes(inputSearchRegion.toLowerCase())
                    }))
                        : setRegionsData(json)
                })
        }, 300);
        return () => clearTimeout(searchRegion)
    }, [inputSearchRegion, sort]);

    function handleSearch(evt) {
        setInputSearchRegion(evt.target.value)
    }

    function handleSort(sort) {
        setSort(sort)
    }

    return (
        <div className="page">
            <div className="filter-panel">
                <input className="ant-input" type="text" onChange={handleSearch} placeholder="Search region..."></input>
                <div className="sort-buttons">
                    <button
                        className="ant-btn ant-btn-primary"
                        onClick={() => {
                            handleSort("asc")
                        }}>
                        по возрастанию
                </button>
                    <button
                        className="ant-btn ant-btn-primary"
                        onClick={() => {
                            handleSort("desc")
                        }}>
                        по убыванию
                </button>
                </div>
            </div>
            {regionsData && regionsData.map((item, index) => {
                return <Region key={`${index}_${item.fullname}`} {...item} />
            })}
        </div>
    )
}

export default RegionsPage
