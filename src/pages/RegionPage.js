import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RegionPage() {
    const url = window.location.pathname;
    const index = Array.from(url).findIndex(item => item === '=');
    const id = +(Array.from(url).slice(index + 1).join(''));

    const [regionData, setRegionData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/regions?_start=${id - 1}&_end=${id}`)
            .then(res => res.json())
            .then(json => setRegionData(...json));
    }, [])

    return (
        <div className="page region-page">
            {regionData &&
                <div className="region">
                    <h1>{regionData.fullname}</h1>
                    <div className="item">
                        <p className="title">Адресс:</p>
                        <p>{regionData.address}</p>
                    </div>
                    <div className="item">
                        <p className="title">Количество библиотек:</p>
                        <p>{regionData.libraries}</p>
                    </div>
                    <div className="item">
                        <p className="title">Количество менеджеров:</p>
                        <p>{regionData.buildings_management}</p>
                    </div>
                    <div className="item">
                        <p className="title">Количество сотрудников:</p>
                        <p>{regionData.employees}</p>
                    </div>
                    <div className="item">
                        <p className="title">Количество компьютеров:</p>
                        <p>{regionData.computers}</p>
                    </div>
                    <div className="item">
                        <p className="title">Фондов:</p>
                        <p>{regionData.funds}</p>
                    </div>
                </div>
            }
            <Link to="/" className="return-back">Вернуться</Link>
        </div>
    )
}

export default RegionPage
