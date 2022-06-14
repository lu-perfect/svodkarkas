import {useEffect, useState} from "react";
import Box from "../../UI/Box";
import Button from "../../UI/Button";
import Icon from "../../UI/Icon";
import Typography from "../../UI/Typography";
import BunnerActionButton from "./BunnerActionButton";
import InternalLink from "../../UI/InternalLink";
import {formatPrice} from "../../../utils/formatPrice";

export type Project = {
  id: string;

  title: string;

  preview: string;
  description: string;

  tags: Array<string>;

  facades: number;
  floors: number;

  isPopular?: boolean;
  isSale?: boolean;

  price: number;

  bedrooms: number;
  bathrooms: number;
};

const ProjectCard = ({ project } : { project: Project }) => {
  const [transition, setTransition] = useState(false);
  const [slide, setSlide] = useState(1);

  function getSrc() {
    let src = `/images/projects/${project.id}`;

    if (slide === 1) {
      return `${src}/cover.jpg`
    }

    return `${src}/facades/facade-${slide - 1}.jpg`;
  }

  function moveNext() {
    setTransition(true);
    setTimeout(() => {
      setSlide(slide + 1);
      setTransition(false);
    }, 400);
  }
  function movePrev() {
    setTransition(true);
    setTimeout(() => {
      setSlide(slide - 1);
      setTransition(false);
    }, 400);
  }

  return (
    <Box className="project-card">
      <figure className="card-banner">
        <Box className="slider-controls">
          <button aria-label="Предыдущий проект" className="prev" onClick={() => movePrev()} disabled={slide === 1}>
            <span className="b b1" />
            <span className="b b2" />
          </button>

          <button aria-label="Следующий проект" className="next" onClick={() => moveNext()} disabled={slide === 1 + project.facades}>
            <span className="b b1" />
            <span className="b b2" />
          </button>
        </Box>

        <InternalLink href={`/projects/${project.id}`}>
          <img src={getSrc()} alt={project.title} className={`w-100${transition ? ' transition' : ''}`} />
        </InternalLink>

        <Box className="card-badges">
          {project.isSale && (
            <div className="card-badge orange">
              Акция
            </div>
          )}

          {project.isPopular && (
            <div className="card-badge green">
              Популярный
            </div>
          )}
        </Box>

        <Box className="banner-actions">
          <BunnerActionButton
            label="Тэги"
            caption={project.tags.join(', ')}
            icon={(
              <Icon viewBox="0 0 24 24">
                <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" />
              </Icon>
            )}
          />

          <BunnerActionButton
            label="Жилые комнаты"
            caption={project.bedrooms}
            icon={(
              <Icon viewBox="0 0 24 24">
                <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z" />
              </Icon>
            )}
          />

          <BunnerActionButton
            label="Санузлы"
            caption={project.bathrooms}
            icon={(
              <Icon viewBox="0 0 24 24">
                <circle cx="7" cy="7" r="2" />
                <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25c.15-.15.36-.24.58-.24.46 0 .83.37.83.83V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10.01 5 11.01 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z" />
              </Icon>
            )}
          />
        </Box>
      </figure>

      <Box className="card-content">
        <Box className="card-info">
          <Typography tag="h3" className="h3 card-title">
            <InternalLink href={`/projects/${project.id}`}>
              {project.title}
            </InternalLink>
          </Typography>

          <Box className="card-price">
            <strong>
              {formatPrice(project.price)}
            </strong>
          </Box>
        </Box>

        <Typography tag="p" className="card-text">
          {project.preview}
        </Typography>
      </Box>
    </Box>
  );
}
export default ProjectCard;
