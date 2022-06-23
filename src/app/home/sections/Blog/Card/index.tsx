import Image from 'next/image';
import Link from "next/link";

import Icon from "components/UI/Icon";

import styles from './styles.module.scss';

export type BlogCardProps = {
  id: number;
  title: string;
}

const BlogCard = ({ id, title } : BlogCardProps) => (
  <article className={styles.root}>
    <figure className={styles.banner}>
      <Link href={`/blog/${id}`}>
        <Image width={400} height={250} src={`/images/blog/${id}.jpg`} alt={title} />
      </Link>
    </figure>

    <h3 className={styles.title}>
      <Link href={`/blog/${id}`}>
        <a>
          {title}
        </a>
      </Link>
    </h3>

    <div className={styles.content}>
      <div className={styles.publishDate}>
        <Icon viewBox="0 0 489 489">
          <path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.8,489,244.5S379.8,0,244.5,0z M265.3,447.4V437    c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v10.4c-95.8-9.8-172.3-86.3-182-182H51c11.4,0,20.8-9.4,20.8-20.8    s-9.4-20.8-20.8-20.8h-9.3c9.8-95.8,86.3-172.3,182-182V51c0,11.4,9.4,20.8,20.8,20.8s20.8-9.4,20.8-20.8v-9.3    c95.8,9.8,172.3,86.3,182,182H437c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h10.4C437.6,361.1,361.1,437.6,265.3,447.4z"/>
          <path d="M244.5,124.9c-11.4,0-20.8,9.4-20.8,20.8v91.5L129,353.8c-7.3,9.4-5.2,21.8,3.1,29.1c11.6,8.5,23.9,2.1,28.1-3.1    l101-122.8c2.1-3.1,4.2-7.3,4.2-12.5v-98.8C265.3,134.2,256,124.9,244.5,124.9z"/>
        </Icon>

        <time dateTime="2022-27-06">Июнь 27, 2022</time>
      </div>

      <Link href={`/blog/${id}`}>
        <a className={styles.readMore}>
          Читать
        </a>
      </Link>
    </div>
  </article>
);
export default BlogCard;
