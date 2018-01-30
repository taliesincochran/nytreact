import React, { Component } from 'react';
import axios from 'axios';
import {
		Field,
		FieldLabel,
		FieldBody,
		Label,
		Control,
		Input,
		Icon,
		Help,
		Select,
		TextArea,
		Checkbox,
		Radio,
		Button	
		} from 'bloomer';
const ArticleSearch = props => {
	return (
		<div>
			<Field>
				<FieldLabel>
					<Label>Search Topic</Label>
				</FieldLabel>
				<FieldBody>
					<Field>
						<Control>
							<Input placeholder="Search Topic" name="topic" onChange={props.onChange} value={props.topic} />
						</Control>
					</Field>
				</FieldBody>
			</Field>
			<Field isHorizontal>
				<FieldLabel isNormal>
				    <Label>Start Date</Label>
				</FieldLabel>
				<FieldBody>
				    <Field isGrouped>
				        <Control isExpanded hasIcons='left'>
				            <Input type= 'date' placeholder='Start Date (YYYYMMDD)' onChange={props.onChange} value={props.startDate} name='startDate' />
				            <Icon isSize='small' isAlign='left'><span className="fa fa-calender" aria-hidden="true"/></Icon>
				        </Control>
				    </Field>
				</FieldBody>
			</Field>
			<Field isHorizontal>
				<FieldLabel isNormal>
				    <Label>End Date</Label>
				</FieldLabel>
				<FieldBody>
				    <Field isGrouped>
				        <Control isExpanded hasIcons='left'>
				            <Input type='date' placeholder='End Date (YYYYMMDD)' onChange={props.onChange} value={props.endDate} name='endDate' />
				            <Icon isSize='small' isAlign='left'><span className="fa fa-calender" aria-hidden="true"/></Icon>
				        </Control>
				    </Field>
				</FieldBody>
			</Field>
			<Field isHorizontal>
				<FieldLabel /> {/* empty for spacing */}
				<FieldBody>
				    <Field>
				        <Control>
				            <Button onClick={props.onSubmit}>Submit</Button>
				        </Control>
				    </Field>
				</FieldBody>
			</Field>
		</div>	
	)
}
export default ArticleSearch;