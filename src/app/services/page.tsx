import type { NextPage } from 'next';

import ServicesSection from "./sections/Services";
import CreditPage from "./sections/Credit";
import FAQSection from "./sections/FAQ";

const ServicesPage: NextPage = () => (
  <>
    <CreditPage/>
    <ServicesSection/>
    <FAQSection/>
  </>
);

export default ServicesPage;
