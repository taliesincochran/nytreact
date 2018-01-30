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

<Hero isColor='info' isSize='medium'>
<HeroHeader>
    <Nav>
        <NavLeft>
            <NavItem isBrand>New York Times Article Search</NavItem>
        </NavLeft>
        <NavCenter>
            <NavItem href='http://www.nytimes.com'>
                New York Times
            </NavItem>
            <NavItem href='http://developer.nytimes.com/article_search_v2.json'>
                Article Search Api
            </NavItem>
        </NavCenter>
        <NavRight isMenu>
            <NavItem href='/'>Home</NavItem>
        </NavRight>
    </Nav>
</HeroHeader>

<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>New York Times Article Search</Title>
    </Container>
</HeroBody>

<HeroFooter>
    <Tabs isBoxed isFullWidth>
        <Container>
            <TabList>
                <Tab isActive><TabLink href="/">New Seach</TabLink></Tab>
                <Tab><TabLink href="/newArticles">Search Results</TabLink></Tab>
                <Tab><TabLink href="/savedArticles">Saved Articles</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
</HeroFooter>
</Hero>
)};
export default Head;