import { Global, css } from '@emotion/react';
import { Scene } from 'components/Scene';

const styles = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Index = () => (
  <main>
    <Global styles={styles} />
    <Scene />
  </main>
);

export default Index;
