import Image from "next/image";
import Link from "next/link";
import classes from "./GPTs_Card_Category.module.scss";
import GPTs_Card_Category_Type from "../../types/GPTs_Card_Category";

const GPTs_Card_Category = (props: GPTs_Card_Category_Type) => {
  return (
    <Link
      href={`/gpts${props.link}`}
      passHref
      className={[classes.link, classes.cardContainer].join(" ")}
    >
      <div className={classes.imageContainer}>
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 80px, 100px"
            className={classes.image}
          />
        </div>
      </div>
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{props.card_title}</h3>
        <p className={classes.description}>{props.card_description}</p>
      </div>
    </Link>
  );
};

export default GPTs_Card_Category;
