import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Images/home-caro1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Custom Bedroom Cabinets</h3>
              <b>Custom cabinets are worth the cost if you have a good budget and want something unique that berfectly complements your home</b>
            </div>
          </div>
          <div className="carousel-item">
            <img src='/Images/home-caro2.jpg' className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Custom Dining Cabinets</h3>
              <b>Most expensive cabinetry products are made by experienced artisans with great craftsmanship in cabinet making</b>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/home-caro3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Custom Kitchen Cabinets</h3>
              <b>Our team can easily customize any cabinets to fit in your home, without leaving space unused</b>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel