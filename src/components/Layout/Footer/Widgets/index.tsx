import Widget from "./Widget";

import widgets from "./widgets.data";

import styles from './styles.module.scss';

const Widgets = () => (
  <div className={styles.root}>
    {widgets.map((widget) => (
      <Widget key={widget.title} {...widget} />
    ))}
  </div>
);

export default Widgets;
