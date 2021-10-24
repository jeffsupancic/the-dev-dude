const Blog = () => {
  return (
    <div>
      {`
      Steps followed to setup this personal portfolio:
      1. followed create react app as a starter https://create-react-app.dev/ using the type script template chose to use npm
      2. hosted with digital ocean apps which easily wraps this app in a contianer and created a yaml file for you https://www.digitalocean.com/ with automatic deploy on commit to main branch
      3. added react router for code splitting
      4. added mui v5 didn't use styled-components
      5. added theme provider



      TODO:
      1. add more lint rules
      2. configure prettier
      3. enforce tests and lint rules with husky
      4. add material ui
      5. show some data fetching
      6. add .env variable
      7. add / fix unit tests on github / site
      8. test out emotion instead of jss
      9. mui theme - try theme creator?
      10. custom hook for 
      `}
    </div>
  );
};

export default Blog;
