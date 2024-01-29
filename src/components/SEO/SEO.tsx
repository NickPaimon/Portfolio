import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const SEO: FC = () => {
  return (
    <Helmet>
      <title>Frontend Developer - Mykola Pecheniuk</title>
      <meta
        name="description"
        content="Experienced Frontend Developer specializing in React, JavaScript, and modern web development technologies. View my portfolio to see my projects, skills, and professional journey."
      />
      <meta
        name="keywords"
        content="Frontend Developer, React Developer, JavaScript, Web Development, HTML, CSS, User Interface Design, Responsive Web Design"
      />
    </Helmet>
  );
};

export default SEO;
