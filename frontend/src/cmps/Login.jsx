import React from 'react';
import { connect } from 'react-redux'
import { Facebook } from './Facebook'

export class Login extends React.Component {

    state = {
        nameBGC: null,
        passBGC: null,
        filed: {
            inputName: '',
            inputPass: ''
        },
        isFacebookOn: false
    }

    handleInput = ({ target }, targetClass) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => ({ [targetClass]: null, filed: { ...prevState.filed, [field]: value } }))
    }


    onSubmitLogin = (ev) => {
        ev.preventDefault()
        const name = this.state.filed.inputName
        const pass = this.state.filed.inputPass
        if ((!name || name.length < 3) || !pass) {
            if (!name || name.length < 3) {
                this.restLoginForm('nameBGC')
            }
            if (!pass) {
                this.restLoginForm('passBGC')
            }
            return
        }
        this.props.onLogin(this.state.filed)
        this.props.onLoginToggle()
    }

    onToggleFaceBook = () => {
        this.setState({ isFacebookOn: true })
    }

    restLoginForm = (targetBGC) => {
        this.handleInput({ target: { name: 'inputPass', value: '' } })
        this.setState({ [targetBGC]: 'wrongForm' })
    }

    render() {
        const { nameBGC, passBGC } = this.state
        const { inputName, inputPass } = this.state.filed
        return (
            <div className="login flex center ">
                <div className="login-background flex column justify-center">
                    <a className="close-login" onClick={this.props.onLoginToggle}>X</a>
                    <div className="login-container  flex align-center column">
                        <h3>Login To Party Boxer</h3>
                        <button onClick={this.onToggleFaceBook} className="facebook-btn">Continue With Facebook</button>
                        {this.state.isFacebookOn && <Facebook />}
                        {/* <button>Continue With Google</button>
                        <button>Continue With Apple</button> */}
                        <div className="buffer flex align-center">
                            <hr />
                            <h5>OR</h5>
                        </div>
                        <form action="">
                            <input className={nameBGC} type="text" placeholder="User Name" onChange={(event) => this.handleInput(event, 'nameBGC')} value={inputName} name="inputName" />
                            <input className={passBGC} type="password" placeholder="Password" onChange={(event) => this.handleInput(event, 'passBGC')} value={inputPass} name="inputPass" />
                            <button onClick={(event) => this.onSubmitLogin(event)} className="submit-btn">Continue</button>
                            <div className="remember-me flex space-between">
                                <div className="check-box flex justify-center">
                                    <input className="check-box-input" type="checkbox" />
                                    <label><a href="#">Remember me</a></label>
                                </div>
                                {/* TODO: with Link */}
                                <a href="#">Forgot Password</a>
                            </div>
                        </form>
                    </div>
                    <div className="sign-in flex column align-center">
                        <hr />
                        <p>Not a member yet? <a href="#">Join now</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.log
    }
}


const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(Login)