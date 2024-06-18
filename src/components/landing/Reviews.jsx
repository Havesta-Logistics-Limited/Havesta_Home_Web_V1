
import React, { useState } from 'react';
import ReviewsRoutes from '../../routes/reviews.routes';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    const prevSlide = currentSlide === 0 ? ReviewsRoutes.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleNextClick = () => {
    const nextSlide = currentSlide === ReviewsRoutes.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className='justify-center p-3 font-primary'>
      <h1 className='text-center font-bold text-3xl items-center'>
        Customer Reviews
      </h1>
      <p className='text-center font-primary items-center p-2'>
        We are proud of our accomplishments. We will keep <br /> delivering excellence and satisfaction.
      </p>
      <br />
      <div className='relative w-full flex justify-center items-center'>
        <div className='w-7/12 overflow-hidden'>
          <div className='flex transition-transform duration-300' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {ReviewsRoutes.map((review, index) => (
              <div key={index} className='flex-shrink-0 w-full'>
                <div className='flex flex-row items-center bg-harvestaYellow p-2 rounded-md w-full mr-8'>
                  <div className='mr-8'>
                    <img src={review.image} alt="harvesta" width={'230px'} />
                  </div>
                  <div className='flex-1 px-4'>
                    <img src="/icons/Shape.svg" alt="harvesta" className='self-center ml-36 p-2'/>
                    <p className='text-center items-center' style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 3
                    }}>
                      {review.text}
                    </p>
                    <br />
                    <h2 className='text-center items-center'>{review.name}</h2>
                    <h3 className='text-center items-center'>{review.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handlePrevClick} className='absolute left-56 ml-4 py-4 px-3 bg-harvestaDarkGreen rounded-full hover:bg-harvestaDarkGreen'>
          <img src="/icons/tail-left.png" alt="harvesta" />
        </button>
        <button onClick={handleNextClick} className='absolute right-56 mr-4 py-4 px-3 bg-harvestaDarkGreen rounded-full hover:bg-harvestaDarkGreen'>
          <img src="/icons/tail-right.png" alt="harvesta" />
        </button>
      </div>
      <br /><br /> <br />
      <div className='flex flex-row  justify-evenly'>
        <div className='items-center flex flex-col'>
          <h1 className='text-6xl text-harvestaDarkGreen'>1M+</h1>
          <h3>Monthly Customer Visit</h3>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl text-harvestaDarkGreen'>92%</h1>
          <h3>Customer Satisfaction Rate</h3>
        </div>
        <div className='items-center flex flex-col'>
          <h1 className='text-6xl text-harvestaDarkGreen'>4.9</h1>
          <h3>Average Customer Ratings</h3>
        </div>
      </div>
      <br /><br /> <br />
    </div>
  );
}

export default Reviews;
