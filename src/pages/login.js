import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import "./login.css"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      loginFail: false,
      userId: "",
      register: props.register,
      isCompany: false,
      companyName: '',
      companyInfo: '',
      redirect: false,
      message: null
    }
  }

  componentWillMount() {
  }

  handleSubmit(e) {
    e.preventDefault()
    // checking login credentials
    const { email, password, passwordConf, isCompany, companyName, companyInfo } = this.state
    const pwdMatch = password === passwordConf

    if (this.state.isCompany) {
      if (pwdMatch) {
        fetch('https://devlogger-intensive.herokuapp.com/register', { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, passwordConf, isCompany, companyName, companyInfo }) })
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if (res.result === 'Success') {
              this.setState({ redirect: true })
              localStorage.setItem('dToken', res.token)
            } else {
              this.setState({ message: res.message })
            }
          })
      }
    }
    else if (this.state.register) {
      if (pwdMatch) {
        fetch('https://devlogger-intensive.herokuapp.com/register', { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, passwordConf, isCompany }) })
          .then(res => res.json())
          .then(res => {
            if (res.result === 'Success') {
              this.setState({ redirect: true })
              localStorage.setItem('dToken', res.token)
            } else {
              this.setState({ message: res.message })
            }
          })
      }
    } else {
      fetch('https://devlogger-intensive.herokuapp.com/login', { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
        .then(res => res.json())
        .then(res => {
          if (res.result === 'Success') {
            this.setState({ redirect: true })
            localStorage.setItem('dToken', res.token)
          } else {
            this.setState({ message: res.message })
          }
        })
    }
  }

  render() {
    return (
      <div className="authContainer">
        {this.state.redirect ? <Redirect to='/' /> : null}
        <h1>Devlogger</h1>
        <div className="signup">
          <h1>Welcome</h1>
          {this.state.isCompany ?
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={e => this.setState({ companyName: e.target.value })}
                value={this.state.companyName}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <input
                type="password"
                name="passwordConf"
                placeholder="Password Confirmation"
                onChange={e => this.setState({ passwordConf: e.target.value })}
                value={this.state.passwordConf}
              />
              <textarea
                type="text"
                name="companyInfo"
                placeholder="a bit about your Company"
                onChange={e => this.setState({ companyInfo: e.target.value })}
                value={this.state.companyInfo}
              />
              <button type="submit" name="register">
                {this.state.register ? 'Register' : 'Login'}
              </button>
            </form>
            :
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              {this.state.register ?
                <input
                  type="password"
                  name="passwordConf"
                  placeholder="Password Confirmation"
                  onChange={e => this.setState({ passwordConf: e.target.value })}
                  value={this.state.passwordConf}
                /> : null}
              <button type="submit" name="register">
                {this.state.register ? 'Register' : 'Login'}
              </button>
            </form>
          }
          {this.state.isCompany ?
            <span>Registering as a user?<a onClick={() => this.setState({ register: true, isCompany: false, password: '', passwordConf: '' })}> Create an Account</a></span>
            :
            <span>Looking to register your Company? <a onClick={() => this.setState({ register: true, isCompany: true })}>Register</a></span>
          }
          {this.state.register ?
            <span>Already have an account? <a onClick={() => this.setState({ register: false, isCompany: false, password: '', passwordConf: '' })}>Login</a></span>
            :
            <span>Registering as a user?<a onClick={() => this.setState({ register: true, isCompany: false, password: '', passwordConf: '' })}> Create an Account</a></span>
          }

        </div>
      </div >
    )
  }
}

export default Login
