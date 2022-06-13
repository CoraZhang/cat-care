import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ControlledCarousel() {
  
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3>Cat Photo Gallery</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/400/300?random=3"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Cat Facts</h3>
                    <p>
                      House cats share 95.6% of their genetic makeup with
                      tigers. You read that right, TIGERS.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/400/300?random=2"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Feeding</h3>
                    <p>
                      Being properly hydrated is important for a cat's normal
                      body functions, so fresh water should be available at all
                      times.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/400/300?random=1"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Raw or Cooked? </h3>
                    <p>
                      Raw meats may contain pathogens that are harmful to pets
                      and people.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ControlledCarousel;
