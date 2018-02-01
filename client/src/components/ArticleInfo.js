import React from "react";
import { 
		Media,
		MediaRight,
		MediaLeft,
		MediaContent,
		Content,
		Image,
		Level,
		LevelLeft,
		LevelItem,
		Icon,
		Button
	} from 'bloomer';
const ArticleInfo = props => {
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
			                <LevelItem href={props.url}>
			                    <Button isColor={props.buttonColor}>Go To Article</Button>
			                </LevelItem>
			                <LevelItem>
			                	<Button isColor={props.buttonColor2} onClick={props.buttonFunction2}>{props.button2Text}</Button>
			                </LevelItem> 
			            </LevelLeft>
			        </Level>
			    </MediaContent>
			</Media>
		</div>	
	)			
}

export default ArticleInfo;