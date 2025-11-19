import { useState } from 'react';
import newsData from '../data/newsData';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const getCategoryColor = (category) => {
    switch (category) {
      case '이벤트':
        return 'bg-blue-100 text-blue-800';
      case '파트너십':
        return 'bg-green-100 text-green-800';
      case '성과':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSelectNews = (item) => {
    setSelectedNews(item);
    const detailSection = document.getElementById('news-detail');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseDetail = () => {
    setSelectedNews(null);
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            최신 <span className="text-primary">소식</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serendip Korea의 최신 활동과 보도자료를 확인하세요.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              <div className="relative pb-[60%] overflow-hidden bg-gradient-to-br from-secondary to-blue-900">
                {item.images && item.images.length > 0 && (
                  <img
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.date}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <button
                  type="button"
                  onClick={() => handleSelectNews(item)}
                  className="text-secondary hover:text-primary font-semibold inline-flex items-center transition duration-300"
                >
                  더 보기
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedNews && (
          <div
            id="news-detail"
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 mb-12 relative"
          >
            <button
              type="button"
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 text-gray-400 hover:text-secondary transition"
              aria-label="닫기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mb-4 text-sm text-secondary font-semibold">
              {selectedNews.category}
            </div>
            <h3 className="text-3xl font-bold text-secondary mb-2">
              {selectedNews.title}
            </h3>
            <p className="text-gray-500 mb-6">{selectedNews.date}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {selectedNews.summary}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {selectedNews.details}
            </p>
            {selectedNews.images && selectedNews.images.length > 0 && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {selectedNews.images.map((image) => (
                  <div
                    key={image.src}
                    className="relative pb-[65%] overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-300">
            모든 소식 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
