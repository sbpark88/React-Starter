import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BackButton, Icon, Page, Toolbar, ToolbarButton } from 'react-onsenui';

function OnsenUIPage({ left, center, right, children }) {
  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className='left'>{left ?? <BackButton>Back</BackButton>}</div>
          <DivTitle>{center}</DivTitle>
          <div className='right'>
            {right ?? (
              <ToolbarButton>
                <Icon icon='ion-ios-menu' />
              </ToolbarButton>
            )}
          </div>
        </Toolbar>
      )}
    >
      <section style={{ padding: '10px' }}>{children}</section>
    </Page>
  );
}

export default OnsenUIPage;

const toolbarTitleStyle = css`
  display: flex;
  justify-content: center;
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const DivTitle = ({ children }) => (
  <DivCenter className='center'>{children}</DivCenter>
);
