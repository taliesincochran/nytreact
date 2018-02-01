import React from 'react';
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
const FormField = props => {
	return(
		<Field isHorizontal>
			<FieldLabel>
				<Label>{props.label}</Label>
			</FieldLabel>
			<FieldBody>
				<Field>
					<Control>
						<Input 
							type={props.type} 
							name={props.name} 
							placeholder={props.placeholder}  
							onChange={props.onChange} 
							value={props.value} 
						/>
					</Control>
				</Field>
			</FieldBody>
		</Field>
	)
}
export default FormField;