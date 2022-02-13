import { useNavKeys } from 'mai-ui/dist/hooks';
import { h } from 'preact';
import { useSettings } from '../contexts';
import { Theme } from '../models';
import styles from './Home.module.css';

function Home() {
  const { settings, setSetting } = useSettings();

  useNavKeys({
    SoftLeft: () => setSetting('theme', settings.theme === Theme.Dark ? Theme.Light : Theme.Dark),
    SoftRight: () => console.log('some other function'),
  });

  return (
    <div class={styles.root}>
      <div class={styles.body}>Hello! Welcome to the Preact KaiOS starter template.</div>
      <div class={styles.navbar}>
        <div>Theme</div>
        <div>Other</div>
      </div>
    </div>
  );
}

export default Home;
