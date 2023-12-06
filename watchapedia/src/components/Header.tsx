import React, { useCallback } from "react";
import styled from "@emotion/styled/macro";
import { PAGES } from "../App";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";
import { AiOutlineSearch } from "react-icons/ai";
import { HEADER_HEIGHT } from "../constants/STYLES";

const SignUp = styled.button`
  min-width: 72px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  margin: 15px 0;
  font-size: ${FONT_SIZE.INPUT};
  font-weight: ${FONT_WEIGHT.SEMI_BOLD};
  border: 1px solid ${COLORS.OPAQUE_GRAY_1_050};
  background: transparent;
  color: ${COLORS.BLACK_1};
`;

const SignIn = styled.button`
  background: transparent;
  color: ${COLORS.GRAY_1};
  font-size: ${FONT_SIZE.INPUT};
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: ${FONT_SIZE.INPUT};
  font-weight: ${FONT_WEIGHT.NORMAL};
  background: transparent;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: ${COLORS.BLACK_1};
  line-height: 23px;
`;

const SearchLabel = styled.label`
  width: 100%;
  height: 63px;
  background: ${COLORS.WHITE_1};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchForm = styled.div``;

const SearchFormWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextLogo = styled.h1`
  font-size: ${FONT_SIZE.LOGO};
  font-weight: ${FONT_WEIGHT.BOLD};
  > span[class="primary"] {
    color: ${COLORS.BRAND_COLOR};
  }
  > span:not(.primary) {
    color: ${COLORS.BLACK_0};
  }
`;

const Link = styled.a``;

const SearchMenu = styled.li`
  width: 300px;
  height: 62px;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s ease 0s;
  position: relative;
`;

const MenuButton = styled.button<{ active?: boolean }>`
  font-size: ${FONT_SIZE.DEFAULT};
  color: ${({ active }) => (active ? COLORS.BLACK_1 : COLORS.GRAY_0)};
  cursor: pointer;
  border: none;
  background: none;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  &:not(:first-child) {
    margin-left: 24px;
  }
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const MenuListWrapper = styled.div``;

const Navigation = styled.nav`
  margin: 0 30px;
  max-width: 1200px;
`;

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  margin: 0 auto;
  background-color: ${COLORS.WHITE_0};
  box-shadow: ${COLORS.OPAQUE_BLACK_008} 0 1px 0 0;
  text-align: center;
  z-index: 10;
  transition: background-color 200ms ease 0s;
`;

const Header: React.FC = () => {
  const onSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href={PAGES.index}>
                <TextLogo>
                  <span className="primary">WATCHA</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href={PAGES.index}>
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href={PAGES.tv}>
                <MenuButton>TV 프로그램</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchFormWrapper>
                <SearchForm>
                  <SearchLabel>
                    <AiOutlineSearch />
                    <SearchInput
                      placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                      onChange={onSearchInputChange}
                    />
                  </SearchLabel>
                </SearchForm>
              </SearchFormWrapper>
            </SearchMenu>
            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>
            <Menu>
              <SignUp>회원가입</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;
