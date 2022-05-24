import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/NovaHero.jpg"
          alt="An image showing Nova the German Shepard"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Nova!</h1>
      <p>This blog is about my progress as a reactive dog</p>
    </section>
  );
}

export default Hero;
