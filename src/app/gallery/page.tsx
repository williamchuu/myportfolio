import Section from "../components/Section";
import BlurImage from "../components/BlurImage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const revalidate = 60;

const images = [
    "/landing/carousel/kay_zeus.webp",
    "/landing/carousel/comfyland.webp",
    "/landing/carousel/timelapse.webp",
    "/landing/carousel/spyfamily.webp",
    "/landing/carousel/skincare.webp",
    "/landing/carousel/watches.webp",
    "/landing/carousel/wbi.webp",
    "/landing/carousel/penguin_stickers.webp",
    "/landing/carousel/igaq.webp",
    "/landing/carousel/igaq_mockups.webp",
];

export default function GalleryPage() {
    return (
        <main className="flex min-h-screen flex-col gap-12 items-center">
            <NavBar />
            <Section title="Gallery" grid className="pt-20" subheading="A collection of additional design work.">
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    {images.map((src, index) => (
                        <div key={index} className={`relative w-full h-full aspect-square ${index % 3 === 2 && index < images.length - 4 ? 'md:col-span-2' : ''}`}>
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
