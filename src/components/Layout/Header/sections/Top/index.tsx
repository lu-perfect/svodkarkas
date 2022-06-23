import Container from "components/UI/Container";
import Button from "components/UI/Button";

import {useAppDispatch} from "hooks/redux";

import {openModal} from "app/modals/store/slice";

import styles from './styles.module.scss';

import InfoLinks from "./InfoLinks";
import SocialLinks from "./SocialLinks";

const TopSection = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.root}>
      <Container className={styles.container}>

        <InfoLinks />

        <div className={styles.wrapper}>
          <SocialLinks />

          <Button className={styles.button} onClick={() => dispatch(openModal('feedback'))}>
            Построить Дом
          </Button>
        </div>
      </Container>
    </section>
  );
}
export default TopSection;
