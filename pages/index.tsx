import CountryFlag from 'components/country-flag';
import Container from 'components/layout/container';
import { ENDPOINTS, fetch } from 'connectors/api';
import i18n from 'i18n';
import HeroVisual from 'icons/hero.svg';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Country } from 'types/api';
import url from 'util/url';
import styles from './home.module.scss';

interface Props {
  countries: Country[];
}

const Home: NextPage<Props> = ({ countries }) => {
  const { t } = useTranslation('home');

  return (
    <div className="relative w-screen overflow-hidden">
      <NextSeo
        title={t('pageTitle')}
        languageAlternates={(() => {
          const alternates: { hrefLang: string; href: string }[] = [];

          i18n.locales.map((loc) => {
            alternates.push({
              hrefLang: loc,
              href: url(`/${loc}`),
            });
          });

          return alternates;
        })()}
      />

      <HeroVisual
        className="absolute top-0 left-0 hidden w-screen h-screen pointer-events-none lg:block"
        preserveAspectRatio="xMaxYMin meet"
      />

      <Container className="flex items-center pt-24 pb-24 lg:min-h-screen lg:pt-48">
        <div className="w-full text-base text-white md:text-lg lg:text-xl lg:w-1/2">
          <h1 className="text-4xl font-bold text-white lg:text-6xl">
            {t('title')}
          </h1>

          <p className="my-4">{t('intro')}</p>

          <p className="my-4 font-medium">{t('pickCountry')}</p>

          <div className={styles.countryPicker}>
            {countries.map((country) => {
              return (
                <div
                  className="w-full pb-3 lg:pr-3 lg:w-1/2 xl:w-1/3"
                  key={country.id}
                >
                  <Link href={`/${country.slug}`} passHref>
                    <a className="flex flex-col items-center w-full px-4 pt-4 pb-2 text-base font-medium rounded-lg shadow-lg hover:shadow-sm bg-gradient-to-b from-white to-brand-light-blue hover:to-[#dee3f3] lg:py-3 lg:pl-3 lg:pr-4 lg:flex-row text-brand-dark-blue focus-default">
                      <div className="px-3 pt-1 pb-3 lg:pt-0 lg:px-0 lg:pb-0">
                        <CountryFlag
                          countryCode={country.country_code}
                          className="w-full h-auto rounded lg:rounded-sm lg:w-8 lg:mr-3"
                        />
                      </div>
                      {country.name}
                    </a>
                  </Link>
                </div>
              );
            })}

            <div className="w-4 lg:hidden" />
          </div>
        </div>
      </Container>

      <Container className="mb-10 md:mb-12 lg:mb-20">
        <h2 className="pb-4 text-2xl font-medium leading-tight text-white md:text-3xl md:pb-6 lg:pb-8">
          Bekannt aus
        </h2>

        <div className="flex flex-wrap justify-center space-x-4 md:justify-between md:flex-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 989.31 578.21"
            className="w-auto h-10 my-4"
          >
            <path
              d="M892.83 206.08h96.48v-45.77H873.1c-62.5 0-88.17 35-88.17 89.82v5.36c-10.45-64.57-48.81-95.18-119.08-95.18H548C500.63 65.27 402.52 0 289.13 0 129.51 0 0 129.45 0 289.17s129.51 289 289.13 289a288.92 288.92 0 00257.92-158.3h120.14c28.77 0 54.56-1.7 81-22.75 19-15.11 30.94-36.34 36.43-64.21v86.62h55.08l.08-102h130v-45.34h-130.1l.75-18.37c0-29.77 8.94-47.74 52.4-47.74zM547.16 375.23v44.31H329v-64.41c0-54.75 25.75-87.33 88.16-87.33h35.89c28.58 0 45.4-5.73 45.4-29.92 0-24.85-16.82-31.8-46.09-31.8H330.6v-45.77h141.65c71.87 0 82 50.3 82 78.35 0 29.85-12.17 77.2-82.13 77.2H437.4c-43.48 0-52.85 15.72-52.85 45.46v13.91zm117.5-1.1h-60.77v-168h60.77c47.76 0 64.94 20.43 64.94 84s-17.18 84-64.94 84z"
              fill="#fff"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-10 my-4"
            viewBox="0 0 636.06 159.63"
          >
            <path
              fill="#fff"
              d="M106.31 49.68L90.4 124.77H80.19l15.92-75.09h10.2zM121.63 49.68l-15.91 75.09H95.51l15.91-75.09h10.21zM.1 49.68L0 124.77h75.12l15.91-75.09H.1zM232.08 110.86a22.75 22.75 0 01-8.21-1.34 15.21 15.21 0 01-5.69-3.71 14.68 14.68 0 01-3.32-5.66 23.14 23.14 0 01-1.08-7.26V64.83h10.16V92a15.42 15.42 0 00.62 4.66 8.44 8.44 0 001.69 3.12 6.08 6.08 0 002.61 1.73 10.46 10.46 0 003.35.52 8.21 8.21 0 006-2.28q2.31-2.28 2.31-7.75V78.33h10.18v14.56a22.84 22.84 0 01-1.11 7.29 14.5 14.5 0 01-9.18 9.37 23.92 23.92 0 01-8.33 1.31z"
            />
            <path
              fill="#fff"
              d="M240.54 64.83h10.03v10.03h-10.03zM227.23 64.83h10.03v10.03h-10.03zM146.37 82.83v10h8.57v9a14.61 14.61 0 01-2.12.26c-.8 0-1.77.06-2.89.06a13.08 13.08 0 01-5.47-1.07 10.64 10.64 0 01-3.91-3 13.22 13.22 0 01-2.34-4.65 21.7 21.7 0 01-.78-6q0-6.82 3.15-10.77t10.26-3.94a20.46 20.46 0 015.89.81 26.88 26.88 0 014.78 1.93l2.93-8.14a18.79 18.79 0 00-1.72-.91 20.91 20.91 0 00-3.06-1.14 35.61 35.61 0 00-10.19-1.4 24.8 24.8 0 00-8.82 1.56 20.21 20.21 0 00-7.19 4.59 21.57 21.57 0 00-4.82 7.39 26.7 26.7 0 00-1.76 10 28.67 28.67 0 001.6 10 20.27 20.27 0 004.52 7.36 19.21 19.21 0 007.06 4.56 26 26 0 009.22 1.56 51.82 51.82 0 0010-.81 39.75 39.75 0 005.85-1.53V82.83zM186 64.11q10.2 0 15.62 3.63T207.09 79a12.77 12.77 0 01-2.19 7.75 14.4 14.4 0 01-6.31 4.67c.92 1.14 1.88 2.43 2.88 3.89s2 3 3 4.58 1.93 3.25 2.85 5 1.76 3.41 2.55 5.07h-11.44l-2.52-4.52c-.86-1.52-1.73-3-2.63-4.44s-1.78-2.8-2.66-4.09-1.75-2.45-2.62-3.5h-5V110h-10.2V65.29a56 56 0 016.9-.92c2.3-.17 4.46-.26 6.3-.26zm.58 8.69c-.74 0-1.4 0-2 .07L183 73v12.29h2.88c3.84 0 6.58-.47 8.24-1.43s2.48-2.6 2.48-4.91a5 5 0 00-2.51-4.74q-2.56-1.41-7.47-1.41zM289.49 110q-4.38-7.78-9.48-15.37a155 155 0 00-10.86-14.32V110h-10.07V64.63h8.31c1.44 1.44 3 3.2 4.77 5.3s3.52 4.32 5.33 6.7 3.61 4.84 5.4 7.39 3.46 5 5 7.36V64.63h10.14V110zM347.21 87.26a26.48 26.48 0 01-1.83 10.26 19 19 0 01-5.2 7.26 22.19 22.19 0 01-8.18 4.32 38.31 38.31 0 01-10.85 1.44q-2.75 0-6.41-.23a53.35 53.35 0 01-7.19-1V65.22a58.58 58.58 0 017.36-.88c2.55-.16 4.74-.23 6.57-.23A39.35 39.35 0 01332 65.42a21.52 21.52 0 018.14 4.12 18.33 18.33 0 015.23 7.19 27.26 27.26 0 011.84 10.53zm-29.49 14.38c.48 0 1 .08 1.67.1s1.38 0 2.25 0q7.65 0 11.35-3.86t3.69-10.65q0-7.14-3.53-10.79T322 72.8h-2.16a19.1 19.1 0 00-2.09.16zM354.71 110V64.63h30.6v8.57h-20.4v8.89H383v8.37h-18.09v10.92h21.91V110zM407.61 64.11q10.2 0 15.63 3.63T428.67 79a12.77 12.77 0 01-2.19 7.75 14.46 14.46 0 01-6.31 4.67c.91 1.14 1.87 2.43 2.87 3.89s2 3 3 4.58 1.93 3.25 2.84 5 1.77 3.41 2.55 5.07H420l-2.53-4.52c-.85-1.52-1.73-3-2.62-4.44s-1.79-2.8-2.66-4.09-1.75-2.45-2.63-3.5h-5V110h-10.2V65.29a56 56 0 016.9-.92c2.35-.17 4.48-.26 6.35-.26zm.59 8.69c-.74 0-1.41 0-2 .07l-1.67.13v12.29h2.88c3.83 0 6.58-.47 8.23-1.43a5.21 5.21 0 002.5-4.86 5 5 0 00-2.52-4.74q-2.52-1.46-7.42-1.46zM450.31 102.17a15.13 15.13 0 003.56-.36 6.49 6.49 0 002.26-1 3.24 3.24 0 001.18-1.47 5.17 5.17 0 00.33-1.89 4.39 4.39 0 00-2.1-3.7 29.68 29.68 0 00-7.19-3.17c-1.48-.52-3-1.12-4.45-1.8a16.16 16.16 0 01-4-2.55 12.11 12.11 0 01-2.9-3.72 11.65 11.65 0 01-1.11-5.32 13.26 13.26 0 011.17-5.66 12 12 0 013.34-4.28 15.35 15.35 0 015.23-2.72 23.55 23.55 0 016.93-1A28 28 0 01466 66.72l-2.94 8a27.88 27.88 0 00-4.22-1.72 18.27 18.27 0 00-5.59-.75 10.31 10.31 0 00-5.26 1 3.43 3.43 0 00-1.6 3.11 3.51 3.51 0 00.59 2.09 5.64 5.64 0 001.66 1.55 14.45 14.45 0 002.49 1.24c.94.37 2 .75 3.1 1.15q3.54 1.31 6.15 2.58a16.42 16.42 0 014.35 3 10.74 10.74 0 012.58 4 16 16 0 01.85 5.56q0 6.35-4.44 9.84t-13.41 3.5a37.26 37.26 0 01-5.43-.36 34.83 34.83 0 01-4.28-.88 25 25 0 01-3.2-1.11 22.84 22.84 0 01-2.26-1.11l2.86-8.12a24.8 24.8 0 0012.29 2.88zM508 71.69c-1.39 1.44-3.05 3.31-5 5.59s-3.9 4.79-5.95 7.49-4.05 5.49-6.05 8.37-3.79 5.62-5.36 8.24h23.06V110h-35.63v-6.08c1.22-2.23 2.71-4.7 4.47-7.43s3.61-5.47 5.53-8.24 3.87-5.45 5.85-8 3.83-4.91 5.53-7h-20.34v-8.62H508zM515.89 110V64.63h30.61v8.57h-20.4v8.89h18.11v8.37H526.1v10.92H548V110zM585.93 110q-4.38-7.78-9.48-15.37a155 155 0 00-10.86-14.32V110h-10.07V64.63h8.31c1.43 1.44 3 3.2 4.77 5.3s3.52 4.32 5.33 6.7 3.6 4.84 5.39 7.39 3.47 5 5 7.36V64.63h10.13V110zM604 110V64.63h30.6v8.57h-20.4v8.89h18.11v8.37h-18.15v10.92h21.9V110z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-10 my-4"
            viewBox="0 0 2201.31 520"
          >
            <path
              d="M504.831 352.124v67.778H10V510H504.83v-67.602h90.039v-90.274z"
              fill="#fff"
            />
            <path
              fill="#fff"
              d="M129.053 14.816H10v15.976c20.145.188 33.302 4.346 33.302 38.999v282.685h57.735V241.763h25.843l70.891 110.713h79.937v-13.978c-16.798-.527-28.604-14.508-39.94-28.662l-54.27-76.707c41.408-13.86 83.403-46.634 83.403-107.893 0-68.249-44.285-110.42-137.848-110.42zm0 199.812l-28.134-1.353V41.655h18.149c56.56 0 84.224 28.31 84.224 85.399 0 62.61-30.483 87.572-74.24 87.572zM407.92 14.816H291.51v15.976c20.85 0 33.478 5.05 33.478 38.999v282.685h57.618V245.111h12.804c90.744 0 149.36-32.832 149.36-114.883 0-69.952-40.644-115.412-136.85-115.412zm-12.51 203.63h-12.98V41.657h23.141c54.799 0 75.59 30.953 75.59 91.39 0 71.42-33.654 85.399-85.75 85.399zM821.64 10c-82.931 0-143.192 70.128-143.192 173.323 0 102.725 59.79 174.146 143.193 174.146 83.049 0 143.838-69.071 143.838-172.325C965.48 81.949 905.042 10 821.641 10zm0 26.665c47.105 0 80.76 50.276 80.76 146.658 0 99.906-29.133 147.363-80.76 147.363-46.986 0-79.584-49.806-79.584-147.363 0-98.203 27.958-146.658 79.585-146.658zm384.589 315.811h54.74V14.816h-37.59v240.75L1088.82 14.816h-59.262v337.66h37.12V106.265l139.55 246.211zm143.486 0h156.878v-30.13h-100.082V14.816h-56.796v337.66zm204.863.047h56.089V14.863h-56.089v337.66zm320.921-.047h54.623V14.816h-37.472l-.188 240.75-134.5-240.75h-59.263v337.66h37.296l-.188-246.211 139.669 246.211zm143.37 0h172.441v-30.13h-114.53V189.314h82.755V159.83l-82.755-.188V43.819h99.73V14.804h-157.642"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-10 my-4"
            viewBox="0 0 435 272"
          >
            <path
              d="M0 0v271.5h435V0H0zm172.3 203.7c0 1.7 0 3.2-2.5 3.2-11.7-.1-23.5-.1-35.2-.1-.2 0-.5-.2-1.2-.5v-4.9-69.7c0-8.7-1.7-10.5-10.5-10.5-6.2 0-12.5.2-18.7-.1-3.7-.2-4.9.7-4.9 4.7.2 25.4.1 50.7.1 76.1 0 5 0 5-5.1 5-10.1 0-20.2-.1-30.4 0-2.6 0-3.5-.8-3.5-3.4.1-38.9.1-77.7 0-116.6 0-2.4.7-3.3 3.2-3.3 27 .1 54-.1 81 .1 15.9.2 27.5 11.8 27.6 27.7.3 30.8.1 61.6.1 92.3zM371.6 107c-12.6 32.2-25.2 64.5-37.7 96.7-1 2.5-2.2 3.4-4.9 3.4-10.5-.1-21-.2-31.5 0-3.3.1-4.5-1.2-5.6-4-10-25.9-20.1-51.7-30.1-77.5-1.3-3.3-2.9-4.6-6.5-4.4-7.1.3-14.2.2-21.4 0-2.4 0-3.6.5-3.6 3.3.1 13.2 0 26.5.1 39.7 0 5.9 2.3 8 8.3 8.1 3.7.1 7.5.1 11.2 0 2.4-.1 3.4.6 3.3 3.2-.1 10-.1 20 0 30 0 2.3-.7 3.4-3.2 3.4-10.1-.1-20.3.3-30.4-.2-17.7-.8-28.3-12-28.4-29.7-.1-43.7 0-87.5-.1-131.2 0-2.6.8-3.7 3.4-4.2 11.6-2.2 23.2-4.5 35.5-7v47.2h4.9c16.1 0 32.2.1 48.4-.1 3.2 0 4.5 1.1 5.5 4 7.4 21.6 14.9 43.2 22.4 64.8.3.9.7 1.8 1.5 3.8 1.1-2.9 2-5 2.7-7.2 7.2-20.6 14.4-41.3 21.4-62 .9-2.6 2.1-3.4 4.8-3.4 12.6.1 25.2.1 38.6.1-2.7 8.1-5.6 15.7-8.6 23.2z"
              fill="#fff"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-10 my-4"
            viewBox="0 0 1000 261"
          >
            <path fill="none" d="M0 0h1000v261H0z" />
            <path
              fill="#fff"
              d="M864.564 255.59V62.515h-72.188V5.994H1000v56.521h-72.01V255.59zM658.496 255.59V5.994h63.425V199.06h104.828v56.53zM507.957.585c-74.062 0-123.824 52.633-123.824 130.969C384.134 208.98 435.217 261 511.247 261c43.149 0 75.767-11.496 102.652-36.177l.79-.727-38.865-42.569-.794.67c-17.423 14.682-38.168 22.436-59.983 22.436-33.313 0-54.783-17.022-62.083-49.236l-.294-1.434 172.865-.008c.054-.326.103-.564.16-.992.757-5.605 1.275-14.765 1.275-22.435C626.712 52.805 578.883.585 507.957.585zm-55.082 106.031l.304-1.422c6.774-31.51 25.033-47.482 54.272-47.482 27.589 0 45.743 16.414 52.497 47.475l.309 1.429H452.875zM238.099 255.59L191.938 97.712 145.775 255.59H70.084L0 5.994h65.466l45.358 175.31 47.637-175.31h67.828l47.641 175.663L319.292 5.994h64.574L313.789 255.59z"
            />
          </svg>
        </div>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const countries = await fetch<Country[]>(ENDPOINTS.COUNTRIES, locale);

  return {
    props: {
      countries: countries.data,
    },
  };
};

export default Home;
