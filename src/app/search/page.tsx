import type { NextPage } from 'next'

import Container from "components/UI/Container";

import styles from './styles.module.scss';
import Icon from "../../components/UI/Icon";
import config from "../../config";
import QuickLink from "./components/QuickLink";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {setTerm} from "./store/slice";
import useDebounce from "../../hooks/useDebounce";
import ProjectLink from "./components/ProjectLink";
import {decline} from "../../utils/decline";
import ServiceLink from "./components/SeviceLink";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const dispatch  = useAppDispatch();
  const matches = useAppSelector((state: AppState) => state.search.matches);

  const ref = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 100);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    ref.current?.focus();

    if (typeof router.query.q === 'string') {
      setValue(router.query.q);
    }
  }, []);


  useEffect(() => {
    dispatch(setTerm(debouncedValue));
  }, [debouncedValue])

  return (
    <section className={styles.root}>
      <Container>
        <h1 className="title">
          Поиск по сайту{matches.count > 0 ? ` ${matches.count} ${decline(matches.count, ['совпадение', 'совпадения', 'совпадениий'])}`: ''}
        </h1>

        <div className={styles.searchWrapper}>
          <input
            ref={ref}
            type="search"
            name="query"
            id="query"
            value={value}
            onChange={handleChange}
            aria-label="Поиск"
            autoComplete="off"
            placeholder="Поиск..."
            aria-autocomplete="list"
          />

          <button>
            <Icon width="20px" height="20px" viewBox="0 0 20 20">
              <title>Искать</title>
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <circle cx="8" cy="8" r="6" />
                <line x1="12.242" y1="12.242" x2="18" y2="18" />
              </g>
            </Icon>
          </button>
        </div>

        <ul className={styles.results} role="list">

          <li className={styles.category}>
            <h2>Быстрые ссылки</h2>
            <ul>
              <QuickLink caption="Запрос 1" onClick={() => setValue('Запрос 1')} />
              <QuickLink caption="Запрос 1" onClick={() => setValue('Запрос 2')} />
              <QuickLink caption="Запрос 1" onClick={() => setValue('Запрос 3')} />
            </ul>
          </li>

          {matches.categories.projects.length > 0 && (
            <li className={styles.category}>
              <h2>
                Проекты
              </h2>
              <ul>
                {matches.categories.projects.map((match) => (
                  <ProjectLink key={match.href} {...match} />
                ))}
              </ul>
            </li>
          )}

          {matches.categories.services.length > 0 && (
            <li className={styles.category}>
              <h2>
                Услуги
              </h2>
              <ul>
                {matches.categories.services.map((match) => (
                  <ServiceLink key={match.href} {...match} />
                ))}
              </ul>
            </li>
          )}

          {matches.count === 0 && (
            <li className={styles.category}>
              <h2>
                Нет совпадений
              </h2>
              <p>
                Не нашли то, что искали? Свяжитесь <a href={`tel:${config.company.phone}`}>с нами</a> и мы ответим на все ваши вопросы.
              </p>
            </li>
          )}
        </ul>

      </Container>
    </section>
  );
}

export default SearchPage;
