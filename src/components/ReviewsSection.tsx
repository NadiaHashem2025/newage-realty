import livingRoomBg from "../assets/living-room-bg.jpg";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "I recommend Nadia Hashem if you want to sell or buy your house. She did a great job. I'm very happy that I chose her to sell my property. If I ever want to sell or buy again, I'll be definitely choosing her again.",
      author: "Kap"
    },
    {
      text: "Nadia has been a huge help in making our house search easy. She's patient, knowledgeable, professional, responsive and trustworthy. We have worked with other agents before and I can say without a doubt that Nadia is the best. If I have to approach an agent again, it would definitely be Nadia.",
      author: "Mounika"
    },
    {
      text: "I had a wonderful experience working with Nadia. From start to finish, she was professional, knowledgeable, and genuinely cared about helping me find the perfect home. She was always available to answer my questions and guided me through every step of the process with patience and clarity. Her attention to detail and strong negotiation skills made the entire experience smooth and stress-free. I truly appreciated her honesty and dedication. I highly recommend Nadia to anyone looking to buy or sell a home!",
      author: "Lana"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-xl">⭐</span>
    ));
  };

  return (
    <section 
      id="reviews" 
      className="section-padding relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${livingRoomBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Client Reviews</h2>
          <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Nadia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-elegant)] hover-lift hover:scale-105 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {renderStars()}
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>
              <cite className="font-semibold text-primary">— {review.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;