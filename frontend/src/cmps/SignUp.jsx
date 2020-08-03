import React from 'react';
import { Facebook } from './Facebook'
export class SignUp extends React.Component {

    state = {
        nameBGC: null,
        mailBGC: null,
        passBGC: null,
        rePassBGC: null,
        filed: {
            inputName: '',
            inputPass: '',
            inputRePass: '',
            inputMail: ''
        },
        isFacebookOn: false
    }

    handleInput = ({ target }, targetClass) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ [targetClass]: null, filed: { ...prevState.filed, [field]: value } }))
    }

    onSubmitSignUp = (ev) => {
        ev.preventDefault()
        const name = this.state.filed.inputName
        const mail = this.state.filed.inputMail
        const pass = this.state.filed.inputPass
        const rePass = this.state.filed.inputRePass
        if ((!name || name.length < 3) ||
            // TODO: check if input is mail (contain '@' and '.')
            (!mail || mail.length < 3) ||
            !pass ||
            !rePass) {
            if (!name || name.length < 3) {
                this.restSignUpForm('nameBGC')
            }
            // TODO: check if input is mail (contain '@' and '.')
            if (!mail || mail.length < 3) {
                this.restSignUpForm('mailBGC')
            }
            if (!pass) {
                this.restSignUpForm('passBGC')
            }
            // TODO: check if input is === pass
            if (!rePass) {
                this.restSignUpForm('rePassBGC')
            }
            return
        }
        this.props.onSignUp(this.state.filed)
        this.props.onSignUpToggle()
    }




    onToggleFaceBook = () => {
        this.setState({ isFacebookOn: true })
    }

    restSignUpForm = (targetBGC) => {
        this.handleInput({ target: { name: 'inputMail', value: '' } })
        this.handleInput({ target: { name: 'inputPass', value: '' } })
        this.handleInput({ target: { name: 'inputRePass', value: '' } })
        this.setState({ [targetBGC]: 'wrongForm' })
    }


    render() {





        const { nameBGC, passBGC, rePassBGC, mailBGC } = this.state
        const { inputName, inputPass, inputRePass, inputMail } = this.state.filed
        return (
            <div className="sign-up flex center ">
                <div className="sign-up-background flex column justify-center">
                    <a className="close-sign-up" onClick={this.props.onSignUpToggle}>X</a>
                    <div className="sign-up-container  flex align-center column">
                        <h3>Join Party Boxer</h3>
                        <button onClick={this.onToggleFaceBook} className="facebook-btn">Continue With Facebook</button>
                        {this.state.isFacebookOn && <Facebook />}
                        {/* <button>Continue With Google</button> */}
                        <div className="buffer flex align-center">
                            <hr />
                            <h5>OR</h5>
                        </div>
                        <form action="">
                            <input className={nameBGC} type="text" placeholder="User Name" onChange={(event) => this.handleInput(event, 'nameBGC')} value={inputName} name="inputName" />
                            <input className={mailBGC} type="email" name="" id="" placeholder="Email" onChange={(event) => this.handleInput(event, 'mailBGC')} value={inputMail} name="inputMail" />
                            <input className={passBGC} type="password" placeholder="Password" onChange={(event) => this.handleInput(event, 'passBGC')} value={inputPass} name="inputPass" />
                            <input className={rePassBGC} type="password" placeholder="Repeat Password" onChange={(event) => this.handleInput(event, 'rePassBGC')} value={inputRePass} name="inputRePass" />
                            <button onClick={(event) => this.onSubmitSignUp(event)} className="submit-btn">Sign Up</button>
                        </form>
                    </div>
                    <div className="sign-in flex column align-center">
                        <hr />
                        <p>Already a member? <a href="#">Sign In</a></p>
                    </div>
                </div>
            </div>
        )
    }
}


