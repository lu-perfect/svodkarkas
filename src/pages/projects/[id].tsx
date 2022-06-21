import type { GetStaticProps, NextPage } from 'next';
import type { ReactElement } from "react";
import { useState } from "react";

import InternalLink from "components/UI/InternalLink";
import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import Wrapper from "components/UI/Wrapper";
import Button from "components/UI/Button";
import Icon from "components/UI/Icon";
import List from "components/UI/List";
import Box from "components/UI/Box";

import Layout from 'components/Layout';

import getProjectPrice from "utils/getProjectPrice";
import formatPrice from "utils/formatPrice";

import data from "data";
import * as math from "mathjs";
import { Gallery, Item } from "react-photoswipe-gallery";

const PackageHeader = ({ title } : { title: string }) => (
  <Box className="package-header">
    <Typography>Комплектация</Typography>
    <Typography tag="h3">«{title}»</Typography>
  </Box>
);

const PackageFooter = ({ price } : { price: number }) => (
  <Box className="package-footer">
    <Typography tag="h4" className="h2 price">
      {formatPrice(price)}
    </Typography>

    <Button variant="outline">
      Заказать
    </Button>
  </Box>
);

const PackageRow = ({ i, title, paragraphs, index } : Omit<PackageBlock, 'id'> & { i: number, index: number }) => (
  <Box className="package-row" style={{ gridRow: i + 2 }}>
    <Typography className="package-row-title">
      {title}
    </Typography>

    {(() => {
      if (paragraphs.length === 0) {
        return <></>;
      }

      if (paragraphs.length === 1) {
        return (
          <Typography className={!paragraphs[0].dots[index] ? 'is-empty' : ''} tag="p">
            {paragraphs[0].content}
          </Typography>
        );
      }

      return (
        <List>
          {paragraphs.map((paragraph) => (
            <ListItem key={paragraph.id}>
              <Typography className={!paragraph.dots[index] ? 'is-empty' : ''} tag="p">
                {paragraph.content}
              </Typography>
            </ListItem>
          ))}
        </List>
      );
    })()}

  </Box>
);

const Package = ({ title, blocks, price, index } : Omit<Package, 'id'> & { price: number, index: number }) => {
  const [variant, setVariant] = useState<1 | 2>(1);

  return (
    <>
      <PackageHeader title={title} />

      <>
        {blocks.map((block, i) => (
          <PackageRow
            key={block.id}
            i={i}
            title={block.title}
            paragraphs={block.paragraphs}
            index={index}
          />
        ))}
      </>

      <Box className="package-row custom" style={{ gridRow: blocks.length + 2 }}>
        <Typography className="package-row-title">
          На выбор
        </Typography>

        <Box className={`variant${variant === 1 ? ' active' : ''}`} onClick={() => setVariant(1)}>
          <Typography tag="h4">
            Свайно-винтовой фундамент
          </Typography>
          <Typography>
            <strong>{formatPrice(price)}</strong>
          </Typography>
        </Box>

        <Box className={`variant${variant === 2 ? ' active' : ''}`} onClick={() => setVariant(2)}>
          <Typography tag="h4">
            Железобетонные сваи
          </Typography>
          <Typography>
            <strong>{formatPrice(price + 200000)}</strong>
          </Typography>
        </Box>
      </Box>

      <PackageFooter price={variant === 1 ? price : price + 200000} />
    </>
  );
}

type Slides = {
  covers: Array<{ title: string, url: string }>,
  facades: Array<{ title: string, url: string }>,
  plans: Array<{ title: string, url: string }>,
};

const ProjectPage: NextPage<{ project: Project & { prices: Array<number>, minPrice: string, terraceAndBalconyArea: string, slides: Slides } }> = ({ project }) => {
  const [slide, setSlide] = useState(1);

  return (
    <Layout>
      <section className="project-promo">
        <Container>
          <List className="breadcrumbs">
            <ListItem>
              <InternalLink href="/">
                Главная
              </InternalLink>
            </ListItem>
            <ListItem>
              <InternalLink href="/projects">
                Каталог проектов
              </InternalLink>
            </ListItem>
            <ListItem className="active">
              <Typography>
               «{project.title}»
              </Typography>
            </ListItem>
          </List>

          <Wrapper>
            <Box>
              <Box className="image-wrapper">
                <Box className="slider-container">
                  <Gallery>
                    <Box className="slider" style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}>
                      {project.slides.covers.map((slide) => (
                        <Box key={slide.title}>
                          <Item
                            original={slide.url} // 1024/768
                            width={1024}
                            height={768}
                          >
                            {({ ref, open }) => (
                              <img
                                width={1024} height={768}
                                ref={ref as any}
                                role="button"
                                tabIndex={-1}
                                alt={slide.title}
                                loading="lazy"
                                onClick={open}
                                style={{ objectFit: 'cover' }}
                                src={slide.url} />
                            )}
                          </Item>
                        </Box>
                      ))}
                      {project.slides.facades.map((slide) => (
                        <Box key={slide.title}>
                          <Item
                            original={slide.url} // 1024/768
                            width={1024}
                            height={768}
                          >
                            {({ ref, open }) => (
                              <img
                                width={1024} height={768}
                                ref={ref as any}
                                role="button"
                                tabIndex={-1}
                                alt={slide.title}
                                loading="lazy"
                                onClick={open}
                                src={slide.url} />
                            )}
                          </Item>
                        </Box>
                      ))}
                      {project.slides.plans.map((slide) => (
                        <Box key={slide.title} style={{ padding: '20px 0' }}>
                          <Item
                            original={slide.url} // 1024/768
                            width={1024}
                            height={768}
                          >
                            {({ ref, open }) => (
                              <img
                                width={1024} height={768}
                                ref={ref as any}
                                role="button"
                                tabIndex={-1}
                                style={{ padding: '20px 0' }}
                                alt={slide.title}
                                loading="lazy"
                                onClick={open}
                                src={slide.url} />
                            )}
                          </Item>
                        </Box>
                      ))}
                    </Box>
                  </Gallery>

                  <Box className="controls">
                    <Button onClick={() => setSlide(slide === 1 ? project.covers + project.facades + (project.floors === 'masandra' ? 3 : project.floors) : slide - 1)}>
                      <Icon width={16} height={32} viewBox="0 0 49.656 49.656" style={{ transform: 'rotate(180deg)' }}>
                        <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
                        <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
                      </Icon>
                    </Button>

                    <Button onClick={() => setSlide(slide === project.covers + project.facades + (project.floors === 'masandra' ? 3 : project.floors) ? 1 : slide + 1)}>
                      <Icon width={16} height={32} viewBox="0 0 49.656 49.656">
                        <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
                        <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
                      </Icon>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="project-info">
              <Box className="project-info-header">
                <Typography tag="h1">
                  {project.title}
                </Typography>
              </Box>

              <Box className="row">
                <Box>
                  <Typography tag="h5" className="label">
                    S общая
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 512 512.001">
                      <path d="m497.355469 401.644531c19.496093 19.496094 19.496093 51.214844 0 70.710938-.027344.03125-.058594.058593-.089844.089843l-34.210937 33.785157c-3.898438 3.847656-8.976563 5.769531-14.050782 5.769531-5.164062 0-10.320312-1.984375-14.234375-5.945312-7.757812-7.859376-7.679687-20.523438.179688-28.285157l20.015625-19.769531h-320.964844c-44.113281 0-80-35.886719-80-80v-321.449219l-19.953125 19.6875c-7.863281 7.757813-20.527344 7.671875-28.285156-.191406-7.757813-7.863281-7.671875-20.527344.191406-28.285156l33.789063-33.332031c19.441406-19.179688 51.074218-19.179688 70.515624 0l33.789063 33.332031c7.863281 7.757812 7.949219 20.421875.191406 28.285156-3.914062 3.964844-9.074219 5.953125-14.238281 5.953125-5.074219 0-10.148438-1.917969-14.046875-5.761719l-21.953125-21.660156v323.421875c0 22.054688 17.945312 40 40 40h322.992188l-22.042969-21.769531c-7.859375-7.761719-7.941407-20.425781-.179688-28.285157 7.761719-7.855468 20.425781-7.9375 28.285157-.175781l34.210937 33.785157c.03125.03125.0625.058593.089844.089843zm-45.355469-401.644531h-259c-11.074219 0-20.039062 9-20 20.074219.042969 11.015625 8.984375 19.925781 20 19.925781h259c11.046875 0 20 8.953125 20 20v260c0 11.015625 8.910156 19.960938 19.925781 20 11.074219.039062 20.074219-8.925781 20.074219-20v-260c0-33.136719-26.863281-60-60-60zm-158 342.890625c11.046875 0 20-8.953125 20-20v-89.015625c0-30.328125-24.671875-55-55-55-13.285156 0-25.484375 4.734375-35 12.605469-9.515625-7.871094-21.714844-12.605469-35-12.605469-7.628906 0-14.902344 1.566406-21.511719 4.386719-3.558593-3.257813-8.285156-5.261719-13.488281-5.261719-11.046875 0-20 8.953125-20 20v125c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-89.125c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v89.125c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-89.125c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v89.015625c0 11.046875 8.953125 20 20 20zm90.75-234.890625c-.105469 0-.207031.015625-.3125.015625-.101562 0-.203125-.015625-.308594-.015625-25.433594 0-46.128906 20.71875-46.128906 46.183594 0 11.042968 8.953125 20 20 20s20-8.957032 20-20c0-3.351563 2.808594-6.183594 6.128906-6.183594.105469 0 .207032-.015625.3125-.015625.101563 0 .203125.015625.308594.015625 3.183594 0 5.894531 2.601562 6.113281 5.769531-.394531 1.464844-3.460937 10.523438-22.625 31.605469-11.886719 13.070312-23.566406 23.714844-23.679687 23.816406-6.121094 5.554688-8.191406 14.304688-5.214844 22.011719 2.976562 7.710937 10.390625 12.796875 18.65625 12.796875h54c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-6.878906c17.757812-20.90625 25.757812-36.464844 25.757812-49.816406 0-25.464844-20.695312-46.183594-46.128906-46.183594zm0 0" />
                    </Icon>
                    <Typography>
                      <>
                        {project.area.common} м<sup>2</sup>
                      </>
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography tag="h5" className="label">
                    S террас и балконов
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 512 512.001">
                      <path d="m497.355469 401.644531c19.496093 19.496094 19.496093 51.214844 0 70.710938-.027344.03125-.058594.058593-.089844.089843l-34.210937 33.785157c-3.898438 3.847656-8.976563 5.769531-14.050782 5.769531-5.164062 0-10.320312-1.984375-14.234375-5.945312-7.757812-7.859376-7.679687-20.523438.179688-28.285157l20.015625-19.769531h-320.964844c-44.113281 0-80-35.886719-80-80v-321.449219l-19.953125 19.6875c-7.863281 7.757813-20.527344 7.671875-28.285156-.191406-7.757813-7.863281-7.671875-20.527344.191406-28.285156l33.789063-33.332031c19.441406-19.179688 51.074218-19.179688 70.515624 0l33.789063 33.332031c7.863281 7.757812 7.949219 20.421875.191406 28.285156-3.914062 3.964844-9.074219 5.953125-14.238281 5.953125-5.074219 0-10.148438-1.917969-14.046875-5.761719l-21.953125-21.660156v323.421875c0 22.054688 17.945312 40 40 40h322.992188l-22.042969-21.769531c-7.859375-7.761719-7.941407-20.425781-.179688-28.285157 7.761719-7.855468 20.425781-7.9375 28.285157-.175781l34.210937 33.785157c.03125.03125.0625.058593.089844.089843zm-45.355469-401.644531h-259c-11.074219 0-20.039062 9-20 20.074219.042969 11.015625 8.984375 19.925781 20 19.925781h259c11.046875 0 20 8.953125 20 20v260c0 11.015625 8.910156 19.960938 19.925781 20 11.074219.039062 20.074219-8.925781 20.074219-20v-260c0-33.136719-26.863281-60-60-60zm-158 342.890625c11.046875 0 20-8.953125 20-20v-89.015625c0-30.328125-24.671875-55-55-55-13.285156 0-25.484375 4.734375-35 12.605469-9.515625-7.871094-21.714844-12.605469-35-12.605469-7.628906 0-14.902344 1.566406-21.511719 4.386719-3.558593-3.257813-8.285156-5.261719-13.488281-5.261719-11.046875 0-20 8.953125-20 20v125c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-89.125c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v89.125c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-89.125c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v89.015625c0 11.046875 8.953125 20 20 20zm90.75-234.890625c-.105469 0-.207031.015625-.3125.015625-.101562 0-.203125-.015625-.308594-.015625-25.433594 0-46.128906 20.71875-46.128906 46.183594 0 11.042968 8.953125 20 20 20s20-8.957032 20-20c0-3.351563 2.808594-6.183594 6.128906-6.183594.105469 0 .207032-.015625.3125-.015625.101563 0 .203125.015625.308594.015625 3.183594 0 5.894531 2.601562 6.113281 5.769531-.394531 1.464844-3.460937 10.523438-22.625 31.605469-11.886719 13.070312-23.566406 23.714844-23.679687 23.816406-6.121094 5.554688-8.191406 14.304688-5.214844 22.011719 2.976562 7.710937 10.390625 12.796875 18.65625 12.796875h54c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-6.878906c17.757812-20.90625 25.757812-36.464844 25.757812-49.816406 0-25.464844-20.695312-46.183594-46.128906-46.183594zm0 0"/>
                    </Icon>
                    <Typography>
                      {project.terraceAndBalconyArea} м
                      <sup>2</sup>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="row">
                <Box>
                  <Typography tag="h5" className="label">
                    Спален
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 512 512" width="20px" height="20px">
                      <path d="m512 256.341h-30.024v-120.096h-70.724c-39.176-45.033-95.35-70.714-155.252-70.714s-116.076 25.681-155.253 70.714h-70.723v120.096h-30.024v160.104h30.024v30.024h30v-30.024h391.952v30.024h30v-30.024h30.024zm-451.976-90.096h54.858l4.502-5.552c33.585-41.411 83.38-65.162 136.616-65.162s103.03 23.751 136.615 65.162l4.502 5.552h54.858v90.096h-30.048v-1.146c0-32.479-26.423-58.902-58.902-58.902h-63.124c-17.43 0-33.108 7.616-43.902 19.688-10.794-12.072-26.473-19.688-43.902-19.688h-63.123c-32.479 0-58.902 26.424-58.902 58.902v1.146h-30.048zm180.976 90.096h-120.928v-1.146c0-15.937 12.965-28.902 28.902-28.902h63.123c15.937 0 28.902 12.966 28.902 28.902v1.146zm150.928 0h-120.928v-1.146c0-15.937 12.965-28.902 28.902-28.902h63.124c15.937 0 28.902 12.966 28.902 28.902zm90.072 130.103h-452v-100.103h452z"/>
                    </Icon>
                    <Typography>
                      {project.bedrooms}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography tag="h5" className="label">
                    Санузлов
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 512 512" width="20px" height="20px">
                      <path d="m497 170.595h-17.939c.038-.853.058-1.71.058-2.57 0-30.492-24.807-55.299-55.298-55.299-4.24 0-8.462.49-12.57 1.448-10.296-13.736-26.733-22.308-44.348-22.308-16.535 0-31.698 7.263-41.969 19.234-8.666-5.395-18.776-8.375-29.234-8.375-14.963 0-29.114 6.151-39.36 16.495-8.293-4.769-17.774-7.354-27.558-7.354-7.674 0-15.179 1.601-22.071 4.603-9.544-16.919-27.731-28.313-48.225-28.313-14.964 0-29.115 6.151-39.36 16.496-8.294-4.769-17.775-7.355-27.558-7.355-30.492 0-55.298 24.807-55.298 55.299 0 6.202 1.045 12.277 3.019 18h-24.289c-8.284 0-15 6.716-15 15s6.716 15 15 15h13.227l16.266 93.453c4.399 25.269 21.362 45.538 43.823 54.863l-15.425 30.068c-4.939 9.627-4.52 20.887 1.121 30.12s15.468 14.746 26.288 14.746c8.079 0 15.715-3.105 21.501-8.745l62.201-60.625h143.996l62.2 60.624c5.786 5.64 13.422 8.746 21.502 8.746 10.82 0 20.647-5.513 26.288-14.746 5.642-9.233 6.061-20.493 1.122-30.12l-15.425-30.068c22.461-9.325 39.424-29.593 43.823-54.862l16.265-93.453h13.227c8.284 0 15-6.716 15-15s-6.716-15.002-15-15.002zm-405.433-43.299c7.346 0 14.321 3.19 19.137 8.752 3.318 3.832 8.349 5.733 13.369 5.044 5.022-.686 9.358-3.861 11.528-8.443 4.169-8.804 13.151-14.493 22.884-14.493 13.159 0 24.239 10.259 25.225 23.355.452 6.004 4.45 11.155 10.153 13.084 5.704 1.927 12.007.26 16.01-4.237 4.802-5.396 11.694-8.491 18.909-8.491 7.347 0 14.322 3.189 19.136 8.751 3.316 3.83 8.34 5.73 13.369 5.044 5.022-.686 9.358-3.861 11.528-8.442 4.17-8.804 13.152-14.493 22.885-14.493 8.178 0 15.895 3.988 20.642 10.668 3.285 4.62 8.896 6.994 14.496 6.137 5.604-.857 10.245-4.801 11.996-10.192 3.396-10.45 13.068-17.472 24.069-17.472 10.382 0 19.871 6.506 23.611 16.188 1.558 4.032 4.779 7.196 8.838 8.682 4.06 1.483 8.562 1.147 12.354-.928 3.738-2.045 7.814-3.082 12.115-3.082 13.949 0 25.298 11.349 25.298 25.299 0 .865-.042 1.722-.127 2.57h-375.198c-4.77-4.719-7.525-11.193-7.525-18 0-13.952 11.348-25.301 25.298-25.301zm9.295 266.32c-.151.147-.351.229-.562.229-.201 0-.452 0-.688-.386-.235-.385-.121-.608-.029-.787l19.595-38.197h21.843zm311.526-.157c-.235.386-.486.386-.688.386-.211 0-.41-.081-.562-.229l-40.158-39.141h21.842l19.595 38.197c.092.179.206.401-.029.787zm25.563-104.556c-3.587 20.611-21.375 35.571-42.297 35.571h-279.308c-20.921 0-38.709-14.96-42.297-35.571l-15.37-88.309h394.644z"/>
                    </Icon>
                    <Typography>
                      {project.bathrooms}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="row">
                <Box>
                  <Typography tag="h5" className="label">
                    Габариты
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 384 384" width="20px" height="15px">
                      <path d="M384,112V0H272v40H112V0H0v112h40v160H0v112h112v-40h160v40h112V272h-40V112H384z M32,80V32h48v8v32v8h-8H40H32z M80,312v32v8H32v-48h8h32h8V312z M272,312H112v-40H72V112h40V72h160v40h40v160h-40V312z M352,304v48h-48v-8v-32v-8h8h32H352z M312,80h-8v-8V40v-8h48v48h-8H312z"/>
                    </Icon>
                    <Typography>
                      {project.size.x} × {project.size.y} м
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography tag="h5" className="label">
                    Этажей
                  </Typography>
                  <Box className="desc">
                    <Icon viewBox="0 0 512 512.00137" width="20px" height="15px">
                      <path d="m471.953125 197.863281c0-13.371093-6.632813-25.796875-17.746094-33.234375l-175.980469-117.820312c-13.519531-9.046875-30.984374-9.046875-44.503906 0l-175.980468 117.820312c-11.109376 7.4375-17.746094 19.863282-17.746094 33.234375v294.140625c0 11.042969-8.953125 19.996094-19.996094 19.996094-11.046875 0-20-8.953125-20-19.996094v-294.140625c0-26.742187 13.269531-51.589843 35.488281-66.46875l175.984375-117.820312c27.03125-18.097657 61.972656-18.097657 89.003906 0l175.980469 117.820312c22.226563 14.878907 35.492188 39.726563 35.492188 66.46875 0 11.042969-8.953125 19.996094-20 19.996094-11.042969 0-19.996094-8.953125-19.996094-19.996094zm19.996094 79.957031c-11.042969 0-19.996094 8.953126-19.996094 19.996094v194.1875c0 11.042969 8.953125 19.996094 19.996094 19.996094 11.046875 0 20-8.953125 20-19.996094v-194.1875c0-11.042968-8.953125-19.996094-20-19.996094zm-79.75 56.753907c12.769531 13.316406 19.757812 30.304687 19.757812 48.441406v108.988281c0 11.042969-8.953125 19.996094-20 19.996094h-52.875c-11.042969 0-19.996093-8.953125-19.996093-19.996094v-10h-166.222657v10c0 11.042969-8.953125 19.996094-19.996093 19.996094h-52.875c-11.046876 0-20-8.953125-20-19.996094v-108.527344c0-18.394531 7.308593-35.214843 19.339843-48.117187.292969-.710937.621094-1.414063 1.003907-2.105469l37.5625-67.703125c14.011718-25.019531 41.480468-40.519531 71.730468-40.519531h92.660156c30.273438 0 57.757813 15.519531 71.71875 40.5l37.847657 68.335938c.125.230468.226562.472656.34375.707031zm-239.363281-49.550781-13.871094 24.996093h193.964844l-13.871094-25.042969c-6.757813-12.09375-21.207032-19.949218-36.769532-19.949218h-92.660156c-15.550781 0-29.992187 7.847656-36.792968 19.996094zm219.125 97.988281c0-18.191407-17.417969-32.996094-38.824219-32.996094h-194.320313c-21.410156 0-38.828125 15.011719-38.828125 33.460937v58.53125h74.53125l16.628907-24.296874c3.726562-5.445313 9.902343-8.699219 16.503906-8.699219h57.441406c6.410156 0 12.429688 3.070312 16.191406 8.257812l17.933594 24.738281h72.742188zm-46.996094-5.996094c-11.042969 0-19.996094 8.953125-19.996094 19.996094 0 11.046875 8.953125 20 19.996094 20 11.046875 0 20-8.953125 20-20 0-11.042969-8.953125-19.996094-20-19.996094zm-178.980469 0c-11.046875 0-20 8.953125-20 19.996094 0 11.046875 8.953125 20 20 20 11.042969 0 19.996094-8.953125 19.996094-20 0-11.042969-8.953125-19.996094-19.996094-19.996094zm0 0"/>
                    </Icon>
                    <Typography>
                      {project.floors}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography tag="h3">
                от {project.minPrice} млн руб.
              </Typography>

              <Button variant="slider">
                Построить дом
              </Button>
            </Box>
          </Wrapper>
        </Container>
      </section>

      <section className={`plans ${project.slides.plans.length === 2 ? 'two' : 'one'}-storey`}>
        <Container>
          <Gallery>
            {project.slides.plans.map((slide) => (
              <Item
                key={slide.url}
                original={slide.url}
                width={1024}
                height={768}
              >
                {({ ref, open }) => (
                  <figure className="gallery-item plan" key={slide.url}>
                    <img
                      width={1024} height={768}
                      ref={ref as any}
                      className="cover"
                      onClick={open}
                      role="button"
                      tabIndex={-1}
                      alt={slide.title}
                      loading="lazy"
                      src={slide.url} />
                  </figure>
                )}
              </Item>
            ))}
            {project.slides.facades.map((slide) => (
              <Item
                key={slide.url}
                original={slide.url}
                width={1024}
                height={768}
              >
                {({ ref, open }) => (
                  <figure className="gallery-item facade" key={slide.url}>
                    <img
                      width={1024} height={768}
                      ref={ref as any}
                      className="cover"
                      onClick={open}
                      role="button"
                      tabIndex={-1}
                      alt={slide.title}
                      loading="lazy"
                      src={slide.url} />
                  </figure>
                )}
              </Item>
            ))}
          </Gallery>
        </Container>
      </section>

      <section className="project-packages">
        <Container>
          <Box>
            <Typography tag="h2" className="title">
              Комплектации
            </Typography>


          </Box>

          <Box className="project-packages-grid">
            <Package price={project.prices[0]} title={data.packages.titles[0]} blocks={data.packages.blocks} index={0} />
            <Package price={project.prices[1]} title={data.packages.titles[1]} blocks={data.packages.blocks} index={1} />
            <Package price={project.prices[2]} title={data.packages.titles[2]} blocks={data.packages.blocks} index={2} />
          </Box>
        </Container>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: data.projects.map((project) => ({ params: { id: project.id } })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  if (typeof id !== 'string') {
    return {
      notFound: true,
    }
  }

  let candidate = data.projects.find((e) => e.id === id);
  if (candidate === undefined) {
    return {
      notFound: true,
    }
  }

  const slides: Slides = {
    covers: [],
    facades: [],
    plans: [],
  };

  for (let i = 1; i <= candidate.covers; i += 1) {
    slides.covers.push({ title: `${candidate.title} #${i}`, url:`/images/projects/${candidate.id}/covers/cover-${i}.jpg` });
  }
  for (let i = 1; i <= candidate.facades; i += 1) {
    slides.facades.push({ title: `Фасад #${i}`, url: `/images/projects/${candidate.id}/facades/facade-${i}.jpg` });
  }
  for (let i = 1; i <= candidate.floors; i += 1) {
    slides.plans.push({ title: `Этаж № ${i}`, url: `/images/projects/${candidate.id}/plans/floor-${i}.jpg` });
  }

  const minPrice = getProjectPrice(candidate, 1);
  const prices = [
    minPrice,
    getProjectPrice(candidate, 2),
    getProjectPrice(candidate, 3)
  ].map((e) => Math.ceil(e / 1000) * 1000);

  return {
    props: {
      project: {
        ...candidate,
        slides,
        prices,
        terraceAndBalconyArea: math.format(
          math.add(candidate.area.terrace ?? 0, candidate.area.balcony ?? 0), { precision: 14 }
        ),
        minPrice: (Math.ceil(prices[0] / 100000) * 100000) / 1000000,
        size: {
          x: candidate.size.x.toFixed(2),
          y: candidate.size.y.toFixed(2)
        }
      }
    },
  }
}

export default ProjectPage;
