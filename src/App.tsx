import './style.css'
import ReactIcon from './reactjs-icon.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React TypeScript Webpack Starter Template</h1>
          <img src={ReactIcon} className="App-logo" alt="logo" />
          <p>
            state : <code>{process.env.NODE_ENV}</code> <br />{' '}
            <small>
              created by{' '}
              <i>
                {' '}
                <u>
                  {' '}
                  <a
                    href="https://snickerdev.netlify.app/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {process.env.name}
                  </a>{' '}
                </u>{' '}
              </i>
            </small>
          </p>
          <ClickCounter />
        </header>
      </div>
    </>
  )
}
