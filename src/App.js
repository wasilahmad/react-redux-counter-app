import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './redux/actions/actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increamentCounter = () => {
    dispatch(incNumber(1));
  }

  const decreamentCounter = () => {
    dispatch(decNumber(1));
  }

  return (
    <div className="App text-center">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">React-Redux Fundamentals</h5>
            <p className="card-text">Demonstrate use of ACTIONS, REDUCERS and CENTRAL STORE</p>
          </div>
        </div>
        <h3 className="mt-3">Counter App</h3>
        <div className="btn-toolbar justify-content-center mt-3 mb-3">          
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="btn btn-primary" onClick={decreamentCounter}>-</span>
            </div>
            <input type="text" className="form-control" readOnly value={counter} />
            <div className="input-group-append">
              <span className="btn btn-primary" onClick={increamentCounter}>+</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
