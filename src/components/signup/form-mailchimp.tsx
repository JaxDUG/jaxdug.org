import * as React from 'react'
import { FaSpinner } from 'react-icons/fa'
import InputValidation from '../../components/utilities/input-validation'
import Formsy from 'formsy-react'
import styled from '@emotion/styled'

const HiddenDiv = styled.div`
  position: absolute;
  left: -5000px;
`

// todo(bwills): add spinners class

interface FormProps {
  location: any
}

interface FormState {
  fkValue: string
  isLoading: boolean
  isSuccess: boolean
  message: string
}

export default class FormMailchimp extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.submit = this.submit.bind(this)
    this.resetState = this.resetState.bind(this)
    this.handleFkChange = this.handleFkChange.bind(this)
    this.state = {
      message: '',
      isSuccess: this.isSuccessFromMailChimp(),
      isLoading: false,
      fkValue: ''
    }
  }
  isSuccessFromMailChimp(): boolean {
    // todo(bwills): has to be a better way in react
    return this.props.location.search === '?s=1'
  }
  handleFkChange(event: any) {
    this.setState({ fkValue: event.target.value })
  }
  resetState() {
    this.setState({
      isSuccess: false,
      message: ''
    })
  }
  async submit(data: any) {
    try {
      if (!this.state.isLoading) {
        this.setState({ isLoading: true })

        // hidden value check
        await new Promise(r => setTimeout(r, 500))
        if (this.state.fkValue) {
          this.setState({ isSuccess: true })
          return
        }

        const url = 'https://jacksonvilledevelopers.us20.list-manage.com/subscribe/post?u=430483ae8b85d96d4857cbbbb&amp;id=12d6838f0d'
        window.location.assign(`${url}&FNAME=${data.fn}&LNAME=${data.ln}&EMAIL=${data.email}`)
      }
    } catch (e) {
      this.setState({ message: 'Failed to submit subscription form' })
    } finally {
      this.setState({ isLoading: false })
    }
  }
  render() {
    return (
      <Formsy ref="form" onValidSubmit={this.submit}>
        <div onClick={this.resetState}>
          <InputValidation
            name="fn"
            type="text"
            label="First Name"
            placeholder=""
            required
            validationErrors={{
              isDefaultRequiredValue: 'Please enter a valid first name'
            }}
          />
          <InputValidation
            name="ln"
            type="text"
            label="Last Name"
            placeholder=""
            required
            validationErrors={{
              isDefaultRequiredValue: 'Please enter a valid last name'
            }}
          />
          <InputValidation
            name="email"
            type="email"
            label="Email Address"
            placeholder=""
            validations="isEmail"
            required
            validationErrors={{
              isEmail: 'Please enter a valid email address',
              isDefaultRequiredValue: 'Please enter a valid email address'
            }}
          />
        </div>
        <HiddenDiv>
          <input type="text" value={this.state.fkValue} onChange={this.handleFkChange} tabIndex={-1} />
        </HiddenDiv>
        <small className="mb-4 d-block">
          JaxDUG is committed to your privacy and promises to only send occasional, relevant information to your inbox. We will never sell
          or share your information.
        </small>
        {this.state.message != '' ? <div className="alert alert-warning">{this.state.message}</div> : ''}
        {this.state.isSuccess ? (
          <div className="alert alert-success text-center">
            <h4>Welcome Aboard!</h4>
            <p>Thank you for successfully registering with the Jacksonville Developers User Group</p>
          </div>
        ) : null}
        <button
          type="submit"
          disabled={this.state.isLoading}
          className="btn btn-primary btn-block text-uppercase"
          onClick={this.resetState}
        >
          <strong>Sign Up {this.state.isLoading ? <FaSpinner className="fa-spin" /> : null}</strong>
        </button>
      </Formsy>
    )
  }
}
