import { Reveal } from "./custom/reveal";

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
            <h2 id="about" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                About Me
            </h2>
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            >
                <p className="leading-7">
                    As a Computer Programming student, I'm passionate about blending creativity with technology. I enjoy pushing the boundaries of what's possible, whether it's through code, design, or innovative problem-solving.
                    <br />
                    <br />
                    Presently, my primary focus revolves around mastering the art of building high-quality and scalable software applications, continuously refining my skills in both frontend and backend development. As the saying goes, <em>"Once you go fullstack, you never go back"</em>.
                    <br />
                    <br />
                    When I'm not coding, I usually play games like cricket, sometimes video games as well, or enjoy playing badminton/volleyball. You can also find me binge-watching YouTube videos.
                </p>
            </Reveal>
        </section>
    );
}
