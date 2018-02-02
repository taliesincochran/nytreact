import React from "react";
import Bulma from 'bulma';
import { 
		Hero, 
		HeroHeader,
		HeroBody,
		HeroFooter,
		Container,
		Icon,
		Nav, 
		NavLeft, 
		NavCenter, 
		NavItem, 
		NavRight, 
		Tabs,
		Tablist,
		Tab,
		TabLink,
		TabList,
		Title
	} from "bloomer";
const Head = props => {
	console.log(Tabs);
return (

<Hero isColor='info' isSize='small' style={{
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "999",
  width: "100%"
}}>
<HeroHeader>
    <Nav>
        <NavLeft>
            <NavItem isBrand>New York Times Article Search</NavItem>
        </NavLeft>
        <NavCenter>
            <NavItem href='http://www.nytimes.com'>
                New York Times
            </NavItem>
        </NavCenter>
        <NavRight isMenu>
            <NavItem>
                <a href='http://developer.nytimes.com/article_search_v2.json'>
                  <img src="http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_200c.png" />
                </a>
            </NavItem>
        </NavRight>
    </Nav>
</HeroHeader>

<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>New York Times Article Search</Title>
    </Container>
</HeroBody>
</Hero>
)};
export default Head;