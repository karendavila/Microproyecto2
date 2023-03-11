import React from 'react'
import Styles from './RegisterPage.module.css'

export function RegisterPage() {
  return (
    <div className={Styles.body}>
    <div className={Styles.titleBox}>
      <h1 className={Styles.title}>Create Account</h1>
    </div>

    <div className={Styles.contentBox}>

      <div className={Styles.content}>
        <h1 className={Styles.whiteText}> name</h1>
        <input type="text" className={Styles.textField} />
      </div>

      <div className={Styles.content}>
        <h1 className={Styles.whiteText}>Email</h1>
        <input type="text" className={Styles.textField} />
      </div>
      
      <div className={Styles.content}>
        <h1 className={Styles.whiteText}>Password</h1>
        <input type="text" className={Styles.textField} />
      </div>

      <div className={Styles.content}>
        <button className={Styles.button}><h1 className={Styles.blackText}>Create Account</h1></button>
      </div>

      <div className={Styles.contentContinueGoogle}>
        <button className={Styles.button}><h1 className={Styles.blackText}>Continue with Google</h1></button>
      </div>
    </div>

    </div>
  )
}

