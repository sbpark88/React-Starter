import React, { useCallback, useContext, useRef, useState } from "react";
import styled from "@emotion/styled/macro";
import { PAGES } from "../App";
import { COLORS } from "../constants/COLORS";
import { FONT_SIZE, FONT_WEIGHT } from "../constants/FONTS";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HEADER_HEIGHT } from "../constants/STYLES";
import useMovieSearch from "../features/movie/useMovieSearch";
import useTvSearch from "../features/tv/useTvSearch";
import useClickAway from "../hooks/useClickAway";

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
  height: 40px;
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

const SearchResultListItem = styled.li`
  padding: 4px 6px;
  box-sizing: border-box;
  color: ${COLORS.BLACK_0};
  font-size: ${FONT_SIZE.ITEMS};
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${COLORS.WHITE_2};
  }
`;

const SearchResultList = styled.ul`
  padding: 0;
`;

const SearchResultWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  background: ${COLORS.WHITE_0};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 2px 5px 0 ${COLORS.OPAQUE_BLACK_010};
  max-height: 480px;
  overflow-y: scroll;
`;

const SearchMenu = styled.li`
  width: 300px;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s ease 0s;
  position: relative;
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
`;

const MenuListWrapper = styled.div``;

const Navigation = styled.nav`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1200px;
`;

const Base = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  margin: 0 auto;
  background-color: ${COLORS.WHITE_0};
  box-shadow: ${COLORS.OPAQUE_BLACK_008} 0 1px 0 0;
  text-align: center;
  transition: background-color 200ms ease 0s;
`;

const Header: React.FC = () => {
  const searchMenuRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  useClickAway(searchMenuRef, (event) => {
    event.stopPropagation();
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  });

  const onSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      setSearchKeyword(event.target.value);
      setIsSearchOpen(true);
    },
    [],
  );
  const onSearchResultListClick = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      event.stopPropagation();
      setSearchKeyword("");
      setIsSearchOpen(false);
    },
    [],
  );

  const { data: movieSearchResult } = useMovieSearch(searchKeyword);
  const { data: tvSearchResult } = useTvSearch(searchKeyword);

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link to={PAGES.index}>
                <TextLogo>
                  <span className="primary">WATCHA</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link to={PAGES.index}>
                <MenuButton>영화</MenuButton>
              </Link>
              <Link to={PAGES.tv}>
                <MenuButton>TV 프로그램</MenuButton>
              </Link>
            </Menu>
            <SearchMenu ref={searchMenuRef}>
              <SearchFormWrapper>
                <SearchForm>
                  <SearchLabel>
                    <AiOutlineSearch />
                    <SearchInput
                      value={searchKeyword}
                      placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                      onChange={onSearchInputChange}
                    />
                  </SearchLabel>
                </SearchForm>
              </SearchFormWrapper>
              <SearchResultWrapper>
                <SearchResultList onClick={onSearchResultListClick}>
                  {isSearchOpen &&
                    movieSearchResult?.results.map((movie) => (
                      <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <SearchResultListItem>
                          {movie.title}
                        </SearchResultListItem>
                      </Link>
                    ))}
                  {isSearchOpen &&
                    tvSearchResult?.results.map((tv) => (
                      <Link key={tv.id} to={`/tv/${tv.id}`}>
                        <SearchResultListItem>{tv.name}</SearchResultListItem>
                      </Link>
                    ))}
                </SearchResultList>
              </SearchResultWrapper>
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
