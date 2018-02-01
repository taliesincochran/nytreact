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
import FormField from './FormField';
const ArticleSearch = props => {
	return (
		<div>
			<FormField 
				type={'text'} 
				horizontal={''} 
				label={'Search Topic'} 
				placeholder={"Search Topic"} 
				name={"topic"} 
				onChange={props.onChange} 
				value={props.topic} 
			/>
			<FormField 
				type={'date'} 
				label={'Start Date'} 
				placeholder={'Start Date'} 
				onChange={props.onChange} 
				value={props.startDate} 
				name={'startDate'}
			/>
			<FormField 
				type={'date'} 
				label={'End Date'} 
				placeholder={'End Date'} 
				onChange={props.onChange} 
				value={props.endDate} 
				name={'endDate'}
			/>
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