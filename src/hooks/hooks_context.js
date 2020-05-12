import React, { useContext} from 'react';
import Context from '../utils/context';


const HooksContextForm = () => {
  const context = useContext(Context)

    return (
      <div>
          global Context Form
        <form onSubmit={context.formUseContextSubmit}>
          <label> React useContext: </label>
          <input id="useContext" onChange={context.formUseContextChange} type="text" />
          <button type="submit"> Submit </button>
        </form>
        <br />
        <h3>React useContext:</h3>
        <p>Change: {context.useFormContextChangeState}</p>
        <p>Submit: {context.useFormContextSubmitState}</p>
        <br />
        <br />
      </div>
    )
}


export default HooksContextForm;
