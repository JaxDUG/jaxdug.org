import * as React from 'react'
import { withFormsy } from 'formsy-react'

interface IFormsyDecorator {
  getErrorMessage(): any
  getValue(): any
  hasValue(): boolean
  isFormDisabled(): boolean
  isFormSubmitted(): boolean
  isPristine(): boolean
  isRequired(): boolean
  isValid(): boolean
  isValidValue(): boolean
  resetValue(): void
  setValidations(validations: any, required: boolean): void
  setValue(value: any): void
  showError(): boolean
  showRequired(): boolean
}

interface InputProps extends IFormsyDecorator {
  name: string
  label: string
  placeholder: string
  type: string
}

interface InputState {
  didBlur: boolean
}

class InputValidation extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.didBlur = this.didBlur.bind(this)
    this.state = {
      didBlur: false
    }
  }
  didBlur() {
    this.setState({
      didBlur: true
    })
  }
  changeValue(event: any) {
    this.props.setValue(event.currentTarget.value)
  }
  render() {
    const errorMessage = (this.state.didBlur || this.props.isFormSubmitted()) && this.props.getErrorMessage()
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>
          {this.props.label}: {!this.props.isRequired() ? '*' : ''}
        </label>
        <input
          value={this.props.getValue() || ''}
          className={'form-control ' + (errorMessage ? 'is-invalid' : '')}
          onChange={this.changeValue}
          onBlur={this.didBlur}
          name={this.props.name}
          placeholder={this.props.placeholder}
          type={this.props.type}
          maxLength={150}
        />
        {errorMessage ? <div className="invalid-feedback">{errorMessage}</div> : ''}
      </div>
    )
  }
}

export default withFormsy(InputValidation)
