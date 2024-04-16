import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
        id: 1,
        name: 'Sentosa',
        comment: 'Pelayanan yang luar biasa! Saya sangat menyukai bunga yang saya pesan.',
        rating: 5
      },
      {
        id: 2,
        name: 'Maulidya',
        comment: 'Bunga-bunga cantik dan pengiriman cepat.',
        rating: 4
      },
  ];

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-yellow-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.32 6.463h6.63l-5.358 4.59 2.32 6.462L10 13.923 4.388 18.515l2.32-6.462L1.05 7.463h6.63L10 1z"
              clipRule="evenodd"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-gray-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.32 6.463h6.63l-5.358 4.59 2.32 6.462L10 13.923 4.388 18.515l2.32-6.462L1.05 7.463h6.63L10 1zm0 0v17.037L4.388 18.515 6.708 12.05 1.35 7.463h8.298l2.32-6.462z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Customer Reviews</h2>
        <div className="grid gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex">{renderRating(review.rating)}</div>
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
