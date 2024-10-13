export default function AboutCard() {

    const cards = [
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "lorem Ipsum dolor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
        },
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "lorem Ipsum dolor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
        },
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "lorem Ipsum dolor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
        },
    ]
    return (
        <div className="w-full lg:w-4/5 p-2 flex flex-col md:flex-row md:gap-0 gap-3 items-center justify-center mt-4 md:mt-24 lg:mt-32">
            {cards.map((card, index) => (
            <div
                key={index}
                className={`relative flex flex-col gap-4 items-center p-4 md:p-6 w-full md:w-[428px] h-64 xs:h-60 ${
                index === 1
                    ? "bg-[url('/images/about-card-bg.png')] bg-cover bg-center scale-100 md:scale-105 transform transition-transform duration-300 z-30 text-c1"
                    : "bg-c2 z-20 text-c5"
                } ${index === 0 ? "md:pr-8" : ""} ${index === 2 ? "md:pl-8" : ""}`}
            >
                {index === 1 && (
                <div className="absolute inset-0 bg-c3 opacity-60"></div>
                )}
                {/* Content */}
                <img
                src={card.icon}
                alt=""
                className={` w-6 md:w-8 h-6 md:h-8 relative ${index === 1 ? "text-c1" : "text-cwhite"}`}
                />
                <h3 className="text-lg font-semibold relative">
                {card.title}
                </h3>
                <p className="text-sm relative">
                {card.content}
                </p>
            </div>
            ))}
        </div>
    );
}
