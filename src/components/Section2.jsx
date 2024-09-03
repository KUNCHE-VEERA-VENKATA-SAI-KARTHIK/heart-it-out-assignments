    import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Section2()
{
  const [shows, setShows] = useState({});
  const randomWords = ['cars', 'music', 'space', 'love']; 

  useEffect(() => {
    randomWords.forEach(word => {
      axios.get(`http://api.tvmaze.com/search/shows?q=${word}`)
        .then(response => {
          setShows(prevShows => ({
            ...prevShows,
            [word]: response.data.slice(0, 3) 
          }));
        })
        .catch(error => console.error(`Error fetching data for ${word}:`, error));
    });
  }, []);

  const borderColors = ['rgba(43, 115, 151, 1)', 'rgba(50, 149, 157, 1)', 'rgba(156, 119, 119, 1)'];

  return (

    <div className="container my-5 mx-5">
      <div className="d-flex justify-content-center">
        <div className="accordion mt-5" id="tvShowsAccordion" style={{ width: '80%', marginLeft: '10%' }}>
          {randomWords.map((word, index) => (
            <div className="accordion-item mb-5" key={index} style={{ marginBottom: '50px' }}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button text-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {word}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#tvShowsAccordion"
              >
                <div className="accordion-body text-center">
                  {shows[word] ? (
                    <div className="row">
                      <div className="col-15 d-flex justify-content-around  mb-1">
                        {shows[word].map((show, showIndex) => (
                          <div key={showIndex} className="show-type" style={{ margin: '0 10px' }}>
                            <p style={{ color: 'rgba(50, 149, 157, 1)' }}>
                            <strong>{show.show.type}</strong></p>
                          </div>
                        ))}
                      </div>
                      <div className="col d-flex justify-content-around ">
                        {shows[word].map((show, showIndex) => (
                          <div key={showIndex} className="col-md-4 mb-3 d-flex align-items-center justify-content-center">
                            <div className="card h-100" style={{ borderRadius: '15px', width: '70%', height: '400px', borderColor: borderColors[showIndex] }}>
                              <div className="card-body d-flex flex-column">    
                                <ul className="list-unstyled flex-grow-1">
                                  <li style={{ color: 'rgba(50, 149, 157, 1)' }}>
                                    <strong>{show.show.name}</strong></li>
                                  <li>{show.show.summary ? show.show.summary.replace(/<\/?[^>]+(>|$)/g, "") : 'No summary available.'}</li>
                                </ul>
                                <div className="mt-auto">
                                  <a href={show.show.url} className="btn btn-primary btn-lg btn-block w-100" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: borderColors[showIndex] }}>More Info</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

