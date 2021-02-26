import React, { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import "./search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [active, setActive] = useState(false);

  const url =
    "https://gateway.marvel.com:443/v1/public/characters?apikey=4993a52ca76fb681ae821711ea9e8971";
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url).then((Response) =>
        Response.json()
          .then((json) => setData(json))
          .catch((error) => console.log(error))
      );
    };
    fetchData();
  }, []);

  const toogle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };
  //Get data per page
  const indexLastData = currentPage * dataPerPage;
  const indexFirstData = indexLastData - dataPerPage;
  const currentData =
    data.data && data.data.results.slice(indexFirstData, indexLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Search function
  const filteredData =
    data.data &&
    currentData.filter((results) => {
      return results.name.toLowerCase().includes(search.toLocaleLowerCase());
    });

  return (
    <div>
      <div className="main-container">
        <div className="search-header">
          <h1 className="main-title">Busca de personagens</h1>
          <p className="search-title">Nome do personagem</p>
          <div className="input-container">
            <input
              className="search-field"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </div>
        <div style={{ overflowY: `auto` }}>
          <table>
            <thead>
              <tr className="result-title">
                <th>Personagem</th>
                <th className="responsive-result-title">Séries</th>
                <th className="responsive-result-title">Eventos</th>
              </tr>
            </thead>
            <>
              {data.data &&
                filteredData.map((hero) => (
                  <>
                    <tbody>
                      <tr
                        key={hero.id}
                        className="result"
                        onClick={() => toogle(hero)}
                      >
                        <td className="name-and-avatar">
                          <img
                            alt="avatar"
                            className="avatar-image"
                            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                          />
                          {hero.name}
                        </td>
                        <td>
                          {hero.series.items
                            .map((hero) => (
                              <div className="series">{hero.name}</div>
                            ))
                            .slice(0, 3)}
                        </td>
                        <td>
                          {hero.events.items.map((hero) => (
                            <div className="series">{hero.name}</div>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                    {active === hero ? (
                      <td className="details">
                        <img
                          alt="avatar"
                          className="detail-avatar-image"
                          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        />
                        <div>
                          <p style={{ fontWeight: `bold` }}>Nome:</p>
                          {hero.name}
                          <p style={{ fontWeight: `bold` }}>Participações:</p>
                          {hero.series.items.map((hero) => (
                            <div>{hero.name}</div>
                          ))}
                        </div>
                      </td>
                    ) : null}
                  </>
                ))}
            </>
          </table>
        </div>
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.data && data.data.results.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Search;
