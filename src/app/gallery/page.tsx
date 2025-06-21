import Section from "../components/Section";
import BlurImage from "../components/BlurImage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const revalidate = 60;

const images = [
    "/landing/carousel/boy.webp",
    "/landing/carousel/car.webp",
    "/landing/carousel/danbi.webp",
    "/landing/carousel/dashboard.webp",
    "/landing/carousel/drink.webp",
    "/landing/carousel/equip.webp",
    "/landing/carousel/foodie.webp",
    "/landing/carousel/igaq.webp",
    "/landing/carousel/igaq2.webp",
    "/landing/carousel/payflow.webp",
    "/landing/carousel/sharefood.webp",
    "/landing/carousel/spy.webp",
    "/landing/carousel/berries.webp",
    "/landing/carousel/penguin.webp",
];

export default function GalleryPage() {
    return (
        <main className="flex min-h-screen flex-col gap-12 items-center">
            <NavBar />
            <Section title="Gallery" grid className="pt-20" subheading="A collection of additional design work.">
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    {images.map((src, index) => (
                        <div key={index} className={`relative w-full h-full aspect-square ${index % 3 === 2 ? 'md:col-span-2' : ''}`}>
                            <BlurImage
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                                uninteractive
                            />
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </main>
    );
}
