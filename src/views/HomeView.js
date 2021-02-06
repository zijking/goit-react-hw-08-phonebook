import React from 'react';

import { useSelector } from 'react-redux';
import userSelectors from '../components/redux/users/user-selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => {
  const isLoggIn = useSelector(userSelectors.getIsLoggenIn);

  return (
    <>
      {!isLoggIn ? (
        <div style={styles.title}>
          <h2>Щоб побачити або створити свої контакти Авторизутесь</h2>
        </div>
      ) : (
        <div style={styles.container}>
          <h1 style={styles.title}>
            Вітання у книзі персональних контактів {':)'}
          </h1>
        </div>
      )}
    </>
  );
};

export default HomeView;
