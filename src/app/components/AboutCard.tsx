export default function AboutCard() {

    const cards = [
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "About MACE",
            content: "MACE Kothamangalam , a premier educational institution nestled in the picturesque town of Kothamangalam, offers a vibrant and enriching learning experience. With a rich academic heritage, state-of-the-art infrastructure, experienced faculty, and strong industry connections, MACE Kothamangalam is the ideal host for AKComSocSC."
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
        <div className="w-full sm:w-4/5 md:w-full 2xl:w-4/5 p-2 flex flex-col md:flex-row md:gap-0 gap-3 items-center justify-center mt-4 md:mt-24 lg:mt-32">
            {cards.map((card, index) => (
            <div
                key={index}
                className={`relative flex flex-col gap-1 items-center p-2 md:p-4 w-full md:w-[520px] h-72 xs:h-64 ${
                index === 1
                    ? "bg-[url('/images/about-card-bg.png')] bg-cover bg-center scale-100 md:scale-105 transform transition-transform duration-300 z-30 text-c1"
                    : "bg-c2 z-20 text-c5"
                } ${index === 0 ? "md:pr-8" : ""} ${index === 2 ? "md:pl-8" : ""}`}
            >
                {index === 1 && (
                <div className="absolute inset-0 bg-c3 opacity-60"></div>
                )}
                {/* Content */}
                {/* <img
                src={card.icon}
                alt=""
                className={` w-6 md:w-8 h-6 md:h-8 relative ${index === 1 ? "text-c1" : "text-cwhite"}`}
                /> */}
                <h3 className="text-lg font-semibold relative">
                {card.title}
                </h3>
                <p className="text-sm relative text-justify">
                {card.content}
                </p>
            </div>
            ))}
        </div>
    );
}
