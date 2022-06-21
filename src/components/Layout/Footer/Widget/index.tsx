import WidgetItem from "./Item";

export type WidgetProps = {
  title: string;
  links: Array<{ caption: string; href: string; }>
};

const Widget = ({ title, links } : WidgetProps) => (
  <ul>
    <WidgetItem caption={title} />

    {links.map((link) => (
      <WidgetItem key={link.caption} {...link} />
    ))}
  </ul>
);

export default Widget;
