import React from 'react';
// components
import Link from '@atom/Link';
import { LayoutComponentType, FnbType } from '@store/rootStore';
import Diglett from '@molecule/Diglett';
import { Container, Row, Col } from './index.style';

const Default: React.FC = () => (
  <Container.Footer fluid>
    <Container.Def>
      <Row.Def>
        <Col.Copyright col>
          <Link href="https://github.com/Hansanghyeon/4log/blob/master/LICENSE">
            Copyright (c) 2019-2020 999hyeon
          </Link>
        </Col.Copyright>
      </Row.Def>
    </Container.Def>
  </Container.Footer>
);

const RenderComponent = ({ type }: { type: FnbType }) => {
  switch (type) {
    default:
      return <Default />;
  }
};

const FNB: React.FC<LayoutComponentType> = ({
  fnbType,
}: LayoutComponentType) => (
  <Diglett type={fnbType} RenderComponent={RenderComponent} />
);

export default FNB;
