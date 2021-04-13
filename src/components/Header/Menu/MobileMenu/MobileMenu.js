import { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useScrollBlock } from 'hooks';
import { Wrapper, List, Item, Burger } from './MobileMenu.style';

const MobileMenu = ({ list }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    isOpenMenu ? blockScroll() : allowScroll();
  }, [isOpenMenu, blockScroll, allowScroll]);

  const menuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <Wrapper>
      <Burger>
        {isOpenMenu ? (
          <CloseIcon onClick={menuToggle} />
        ) : (
          <MenuIcon onClick={menuToggle} />
        )}
      </Burger>
      {isOpenMenu && (
        <>
          <List>
            {list.map(link => (
              <Item key={link.name} onClick={menuToggle}>
                {link.value}
              </Item>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default MobileMenu;
