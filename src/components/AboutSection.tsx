import nadiaPhoto from "../assets/nadia-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img 
                src="/lovable-uploads/96117b95-26b1-439c-9d16-6078ecac3353.png"
                alt="Nadia Hashem - Real Estate Expert" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                Since 2020
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Representing Buyers and Sellers in Ontario, Canada. Meet Nadia — your trusted real estate expert! 
                Whether you're buying your first home or searching for a smart investment, she's here to guide you 
                every step of the way. She helps people find more than a house—she helps them come home to themselves.
              </p>
            </div>

            {/* Expertise and Service Area Boxes */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Expertise</h3>
                <p className="text-muted-foreground">Residential Sales & Investment Properties</p>
              </div>
              <div className="card-elevated p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Service Area</h3>
                <p className="text-muted-foreground">Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;