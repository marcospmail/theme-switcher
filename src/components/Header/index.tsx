import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import ThemeContextMeu from '../../utils/ThemeContext';

import { Container } from './styles'


const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeContextMeu)

  return (
    <Container>
      Hello World

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
        >
      </Switch>
    </Container>
  )
}

export default Header;