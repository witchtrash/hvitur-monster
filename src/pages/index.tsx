import { Global, css } from '@emotion/react';

const styles = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Index = () => (
  <main>
    <Global styles={styles} />
    hello
  </main>
);

export default Index;
