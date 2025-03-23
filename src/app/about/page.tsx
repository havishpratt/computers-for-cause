import Image from 'next/image';

export default function About() {
  const timelineEvents = [
    {
      year: "March 2024",
      title: "The Idea",
      description: "It all started with a simple idea in a garage. We noticed how many perfectly good computers were being discarded while many in our community lacked access to technology. This sparked the mission that would become Computers for Cause.",
      imagePath: "/timeline1.jpg",
      imageAlt: "Starting in the garage",
      isImageLeft: true
    },
    {
      year: "July 2024",
      title: "Generous Donation",
      description: "We were able to get in contact with a company called Sycamore International. We received a generous donation of 30 chromebooks and chargers. These laptops were refurbished and donated to local homeless shelters.",
      imagePath: "/timeline2.jpg",
      imageAlt: "First Donation",
      isImageLeft: false
    },
    {
      year: "2023",
      title: "Partnership with Schools",
      description: "We established partnerships with local schools to identify students who needed computers for remote learning. This collaboration helped us create a sustainable distribution system and ensure computers reached those who needed them most.",
      imagePath: "/timeline3.jpg",
      imageAlt: "School partnership meeting",
      isImageLeft: true
    },
    {
      year: "2023",
      title: "Expanding Our Impact",
      description: "As word spread, our volunteer base grew. We began offering basic computer literacy classes alongside our computer donations, helping recipients make the most of their new technology. The community response was overwhelming.",
      imagePath: "/timeline4.jpg",
      imageAlt: "Computer literacy class",
      isImageLeft: false
    },
    {
      year: "2024",
      title: "Looking Forward",
      description: "Today, we're working on expanding our reach beyond our local community. With new partnerships forming and our volunteer base growing, we're excited to help bridge the digital divide for even more people in need.",
      imagePath: "/timeline5.jpg",
      imageAlt: "Team celebration",
      isImageLeft: true
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Journey</h1>
          <p className="text-lg text-white">The story of how we&apos;re making a difference, one computer at a time.</p>
        </div>

        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex flex-col ${event.isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={event.imagePath}
                    alt={event.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-600/50 backdrop-blur-sm text-sm mb-4">
                  {event.year}
                </div>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-200 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 