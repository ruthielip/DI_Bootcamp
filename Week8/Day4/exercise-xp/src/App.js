import BuggyCounter from './components/BuggyCounter';
import ErrorBoundry from './components/ErrorBoundry';

function App() {
  return (
    <div>
    <h4>Click on the numbers to increase the counters.<br/>
    The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h4>
    <div style={{borderTop: '1px solid black'}}></div>
    <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <ErrorBoundry>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundry>
    <div style={{borderTop: '1px solid black'}}></div>
    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
    <ErrorBoundry>
      <BuggyCounter/>
    </ErrorBoundry>
    <ErrorBoundry>
      <BuggyCounter/>
    </ErrorBoundry>
    <div style={{borderTop: '1px solid black'}}></div>
    <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
        <BuggyCounter/>
    </div>
  );
}

export default App;
