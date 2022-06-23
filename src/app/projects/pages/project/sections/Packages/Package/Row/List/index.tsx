import styles from './styles.module.scss';

export type PackageRowListProps = {
  paragraphs: Array<Paragraph>;
  index: number;
}

export default function PackageRowList({ paragraphs, index } : PackageRowListProps) {
  if (paragraphs.length === 0) {
    return <></>;
  }

  if (paragraphs.length === 1) {
    return (
      <p className={!paragraphs[0].dots[index] ? styles.isEmpty : ''}>
        {paragraphs[0].content}
      </p>
    );
  }

  return (
    <ul>
      {paragraphs.map((paragraph) => (
        <li key={paragraph.id}>
          <p className={!paragraph.dots[index] ? 'is-empty' : ''}>
            {paragraph.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
