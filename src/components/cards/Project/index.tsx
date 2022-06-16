import { useState } from "react";

import Box from "components/UI/Box";
import Icon from "components/UI/Icon";
import Typography from "components/UI/Typography";
import InternalLink from "components/UI/InternalLink";

import BannerActionButton from "./BannerActionButton";

import { formatPrice } from "utils/formatPrice";
import getProjectPrice from "../../../utils/getProjectPrice";

const ProjectCard = ({ project } : { project: Project }) => {
  const [transition, setTransition] = useState(false);
  const [slide, setSlide] = useState(1);

  function getSrc() {
    let src = `/images/projects/${project.id}`;

    if (slide <= project.covers) {
      return `${src}/covers/cover-${slide}.jpg`
    }

    return `${src}/facades/facade-${slide - project.covers}.jpg`;
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
        {project.covers + project.facades > 1 && (
          <Box className="slider-controls">
          <button aria-label="Предыдущий слайд" className="prev" onClick={() => movePrev()} disabled={slide === 1}>
          <span className="b b1" />
          <span className="b b2" />
          </button>

          <button aria-label="Следующий слайд" className="next" onClick={() => moveNext()} disabled={slide === project.covers + project.facades}>
          <span className="b b1" />
          <span className="b b2" />
          </button>
          </Box>
        )}

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
          <BannerActionButton
            label="Жилые комнаты"
            caption={project.bedrooms}
            icon={(
              <Icon viewBox="0 0 24 24">
                <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z" />
              </Icon>
            )}
          />

          <BannerActionButton
            label="Санузлы"
            caption={project.bathrooms}
            icon={(
              <Icon viewBox="0 0 24 24">
                <circle cx="7" cy="7" r="2" />
                <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25c.15-.15.36-.24.58-.24.46 0 .83.37.83.83V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10.01 5 11.01 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z" />
              </Icon>
            )}
          />

          <Typography className="card-badge style">
            {(() => {
              switch (project.style) {
                case "barn": return 'Барн';
                case "chalet": return 'Шале';
                case "classic": return 'Классический';
                case "high-tech": return 'High Tech';
                case "modern": return  'Современный';
                case "prairies": return  'Прерий';
                case "scandinavian": return 'Скандинавский';
                default: throw new Error();
              }
            })()}
          </Typography>
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
              {formatPrice(Math.ceil(getProjectPrice(project, 1) / 1000) * 1000)}
            </strong>
          </Box>
        </Box>

        <Box className="table-params">
          <Box>
            <Typography>общая площадь</Typography>
            <Typography>
              <>
                {project.area.common} м<sup>2</sup>
              </>
            </Typography>
          </Box>
          <Box>
            <Typography>габариты</Typography>
            <Typography>{project.size.x.toFixed(2)} х {project.size.y.toFixed(2)}</Typography>
          </Box>
        </Box>

        {project.tags && project.tags.length > 0 && (
          <Typography tag="p" className="card-text">
            <strong>Опции: </strong>
            {project.tags.join(', ')}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
export default ProjectCard;
