import React from "react";
import { 
		Media,
		MediaRight,
		MediaLeft,
		MediaContent,
		Content,
		Level,
		LevelLeft,
		LevelItem,
		Icon,
		Image,
		Delete

	} from 'bloomer';
const NewArticles = props => {
	return (
		<div>
			<Media>
			    <MediaLeft>
			        <Image isSize='64x64' src={props.image} />
			    </MediaLeft>
			    <MediaContent>
			        <Content>
			            <p>
			                <strong>{props.title}</strong> <small>{props.byline}</small> <small>{props.date}</small>
			                <br />
			                {props.snippet}
			            </p>
			        </Content>
			        <Level isMobile>
			            <LevelLeft>
			                <LevelItem href='#'>
			                    <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
			                </LevelItem>
			                <LevelItem href='#'>
			                    <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
			                </LevelItem>
			                <LevelItem href='#'>
			                    <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
			                </LevelItem>
			            </LevelLeft>
			        </Level>
			    </MediaContent>
			    <MediaRight><Delete /></MediaRight>
			</Media>
		</div>	
	)			
}

export default NewArticles;