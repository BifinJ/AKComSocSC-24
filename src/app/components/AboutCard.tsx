export default function AboutCard() {

    const cards = [
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "About MACE",
            content: "MACE Kothamangalam , a premier educational institution nestled in the picturesque town of Kothamangalam, offers a vibrant and enriching learning experience. With a rich academic heritage, state-of-the-art infrastructure, experienced faculty, and strong industry connections, MACE Kothamangalam is the ideal host for AKComSocSC'24."
        },
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "About IEEE",
            content: "IEEE is the world’s largest technical professional organization advancing technology for humanity's benefit. IEEE provides access to industry-leading publications, conferences, and standards to keep members on the cutting edge. With over 400,000 members in 160+ countries, IEEE fosters innovation, collaboration, and technological excellence, empowering professionals and students to turn ideas into impact."
        },
        {
            icon: "https://img.icons8.com/ios-glyphs/30/multiple-messages.png",
            title: "About IEEE ComSoc KC",
            content: "The IEEE Communications Society (ComSoc) is a global community advancing communications and networking technology. Focusing on fostering research, innovation, and collaboration, IEEE ComSoc KC connects engineers, researchers, and industry professionals across communication fields. IEEE ComSoc KC keeps members at the forefront of wireless, networking, IoT, and data science advancements."
        },
    ]
    return (
        <div className="w-full sm:w-4/5 md:w-full 2xl:w-4/5 p-2 flex flex-col md:flex-row md:gap-0 gap-3 items-center justify-center mt-4 md:mt-24 lg:mt-32">
            {cards.map((card, index) => (
            <div
                key={index}
                className={`relative flex flex-col gap-1 items-center p-2 md:p-4 w-full md:w-[520px] h-72 xs:h-64 ${
                index === 1
                    ? "bg-[url('/images/about-card-bg.png')] bg-cover bg-center scale-100 md:scale-110 transform transition-transform duration-300 z-30 text-c1"
                    : "bg-c2 z-20 text-c5"
                } ${index === 0 ? "md:pr-8" : ""} ${index === 2 ? "md:pl-8" : ""}`}
            >
                {index === 1 && (
                <div className="absolute inset-0 bg-c3 opacity-70"></div>
                )}
                {/* Content */}
                {/* <img
                src={card.icon}
                alt=""
                className={` w-6 md:w-8 h-6 md:h-8 relative ${index === 1 ? "text-c1" : "text-cwhite"}`}
                /> */}
                <h3 className="text-lg font-bold relative">
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
